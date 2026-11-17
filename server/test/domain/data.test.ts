import "../helpers/env.ts";
import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { Data, ValidationError } from "../../src/domain/Data.ts";
import { ListingData } from "../../src/domain/ListingData.ts";
import { PhotoData } from "../../src/domain/PhotoData.ts";
import { PricingData } from "../../src/domain/PricingData.ts";
import { RoomDetails } from "../../src/domain/RoomDetails.ts";
import { ScreenSettings } from "../../src/domain/ScreenSettings.ts";

/** Minimal concrete Data that records how the base class drives it. */
class Probe extends Data {
  stored = 0;
  problems: string[];
  constructor(problems: string[]) {
    super();
    this.problems = problems;
  }
  validateData(): string[] {
    return this.problems;
  }
  storeData(): void {
    this.stored += 1;
  }
  retrieveData(): boolean {
    return true;
  }
}

describe("Data.validateAndStore", () => {
  it("stores exactly once when validation passes", () => {
    const probe = new Probe([]);
    probe.validateAndStore();
    assert.equal(probe.stored, 1);
  });

  it("throws a ValidationError carrying every problem and does not store", () => {
    const probe = new Probe(["rent is missing", "dates are invalid"]);
    assert.throws(
      () => probe.validateAndStore(),
      (err: unknown) => {
        assert.ok(err instanceof ValidationError);
        assert.ok(err instanceof Error);
        assert.equal(err.name, "ValidationError");
        assert.deepEqual(err.problems, ["rent is missing", "dates are invalid"]);
        assert.equal(err.message, "rent is missing; dates are invalid");
        return true;
      },
    );
    assert.equal(probe.stored, 0);
  });
});

describe("Data class hierarchy", () => {
  it("is abstract: a subclass must supply the three diagram operations", () => {
    for (const cls of [ListingData, PhotoData, PricingData, RoomDetails, ScreenSettings]) {
      for (const op of ["validateData", "storeData", "retrieveData"] as const) {
        assert.equal(
          typeof cls.prototype[op],
          "function",
          `${cls.name} should implement ${op}()`,
        );
      }
      assert.ok(cls.prototype instanceof Data, `${cls.name} should extend Data`);
    }
  });
});
