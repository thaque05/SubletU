import { app, expect, resetBrowsing, signIn, test } from "../helpers/app.ts";

// 1x1 transparent PNG, so the basemap never depends on tile.openstreetmap.org.
const BLANK_TILE = Buffer.from(
  "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==",
  "base64",
);

test.beforeEach(async ({ page }) => {
  await page.route("https://tile.openstreetmap.org/**", (route) =>
    route.fulfill({ status: 200, contentType: "image/png", body: BLANK_TILE }),
  );
  const token = await signIn(page);
  await page.goto("/");
  await resetBrowsing(page, token);
  await page.reload();
  await expect(app.topCard(page)).toBeVisible();
  await app.nav(page, "Map").click();
});

test.describe("Map tab", () => {
  test("renders a MapLibre canvas and the OSM attribution", async ({ page }) => {
    await expect(page.locator(".maplibregl-canvas")).toBeVisible();
    await expect(page.locator(".maplibregl-ctrl-attrib")).toContainText("OpenStreetMap");
  });

  test("shows a price pin for each listing and a campus marker", async ({ page }) => {
    await expect(page.locator(".map-pin").first()).toBeVisible();
    expect(await page.locator(".map-pin").count()).toBeGreaterThan(0);
    await expect(page.locator(".map-campus")).toHaveCount(1);
    await expect(page.locator(".map-count")).toContainText("on the map");
  });

  test("tapping a pin opens the listing sheet, and Close dismisses it", async ({ page }) => {
    await page.locator(".map-pin").first().click();
    await expect(page.locator(".map-sheet")).toBeVisible();
    await expect(page.locator(".map-pin.active")).toHaveCount(1);

    await page.locator(".map-sheet").getByRole("button", { name: "Close" }).click();
    await expect(page.locator(".map-sheet")).toHaveCount(0);
  });

  test("See full listing opens the detail screen", async ({ page }) => {
    await page.locator(".map-pin").first().click();
    await page.getByRole("button", { name: "See full listing" }).click();
    await expect(page.locator(".detail-hero")).toBeVisible();
  });

  test("opening the Map tab leaves no console errors", async ({ page }) => {
    const errors: string[] = [];
    page.on("console", (m) => {
      if (m.type() === "error") errors.push(m.text());
    });
    page.on("pageerror", (e) => errors.push(e.message));

    await app.nav(page, "Browse").click();
    await app.nav(page, "Map").click();
    await expect(page.locator(".map-pin").first()).toBeVisible();
    expect(errors, `console errors: ${errors.join(" | ")}`).toEqual([]);
  });
});
