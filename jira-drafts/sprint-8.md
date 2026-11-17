# Sprint 8: Jira drafts (TM09-161 and its four subtasks)

**Dates:** Nov 2 to Nov 3 (carried over; the report is closed in Sprint 9, Nov 9 to Nov 10)
**Scrum Master:** Tareq Haque
**Story:** TM09-161 Sprint 8 Report, with subtasks TM09-193 (SCRUM 1), TM09-194 (SCRUM 2), TM09-195 (Sprint Review), TM09-196 (Retrospective)

Jira wiki markup, ready to paste. **Anything in `[brackets]` must be replaced with
what people actually said.** I have not invented stand-up or retro content; the
Outcomes below come only from the repo and Jira.

---

## What the repo and Jira show for Sprint 8

| Key | Story | Pts | Owner | State |
| --- | ----- | --- | ----- | ----- |
| TM09-127 | Auth endpoints (scrypt, JWT) | 5 | Tareq | Done. `server/src/routes/auth.ts`, `test/api/auth.test.ts`, `test/lib/passwords.test.ts`; auth e2e passes |
| TM09-128 | Prototype shell and tab bar | 3 | Tareq | Done. `legacy/prototype.html`; React tab bar now has 5 tabs, Post moved to the Browse header |
| TM09-130 | Listings CRUD, filters, deck | 8 | Tamar | Done (PR 7) |
| TM09-133 | Photo upload endpoints | 3 | Chris | Done (PR 11) |
| TM09-134 | Sample listing data | 3 | Chris | Done (PR 12) |
| TM09-136 | Swipes, saved and reports | 5 | Chang | Done in Jira; PR 13 still open |
| TM09-139 | Nominatim geocoding and seed | 5 | Tareq | Done. `lib/geocode.ts`, `test/lib/geocode.test.ts`; seed geocoded 24 Syracuse addresses live |
| TM09-140 | Button clicks vs swipes | 2 | Tareq | Done. Tap-vs-drag fix `0547d48`; swipe e2e passes |
| TM09-143 | Sprint 7 Report | 2 | Chang | Done |
| TM09-145 | React + Vite scaffold | 3 | Tamar | Done (PR 6) |
| TM09-148 | Sign-in and registration screens | 5 | Chris | Done (PR 9) |
| TM09-151 | Swipe deck with pointer events | 8 | Tareq | Done. `web/src/components/SwipeCard.tsx`; swipe e2e passes |
| TM09-154 | Listing detail view | 3 | Chang | Done in Jira; PR 14 still open |
| TM09-157 | Filter sheet | 3 | Tamar | Done (PR 8) |
| TM09-161 | Sprint 8 Report | 2 | Tareq | Open until the four subtasks below are filled in |

Rolled over from Sprint 8 to Sprint 9: TM09-127, 128, 139, 140, 151, 161. The first
five were finished in the repo but not closed in Jira before the sprint ended.

Test state on this branch: server suite 150 tests, 0 failing (2 known swipe/saved
bugs are tracked as todo tests, fixed by PR 13); Playwright suite passes on
desktop and mobile after the navigation spec was updated for the new tab bar.

---

## TM09-161 · Sprint 8 Report: description

```
Sprint 8 ceremonies run by Scrum Master Tareq Haque.
Sprint goal: [fill in].
```

Acceptance Criteria:

```
* SCRUM 1, SCRUM 2, Sprint Review and Retrospective subtasks are all Done
* Closed BEFORE the sprint is completed (never rolls over)
```

---

### TM09-193 · SCRUM 1

```
Attendance: [who attended] · [minutes] min · Scrum Master: Tareq Haque

||Team Member||Have Done||Plan To Do||Roadblocks||
|Tareq Haque|[what you said]|[what you said]|[what you said]|
|Tamar Shuster|[what Tamar said]|[plan]|[roadblocks]|
|Chris Martinez-Rivas|[what Chris said]|[plan]|[roadblocks]|
|Chang Chang|[what Chang said]|[plan]|[roadblocks]|
```

### TM09-194 · SCRUM 2

```
Attendance: [who attended] · [minutes] min · Scrum Master: Tareq Haque

||Team Member||Have Done||Plan To Do||Roadblocks||
|Tareq Haque|[...]|[...]|[...]|
|Tamar Shuster|[...]|[...]|[...]|
|Chris Martinez-Rivas|[...]|[...]|[...]|
|Chang Chang|[...]|[...]|[...]|
```

### TM09-195 · Sprint Review

```
*Outcomes*
* Server API: auth, listings with filters and deck, photo upload, sample data, geocoded seed of 24 Syracuse listings.
* Front end: React + Vite app with sign-in and registration, swipe deck on pointer events, filter sheet, and a bottom tab bar.
* Tests: server suite of 150 tests and a Playwright end-to-end suite that runs on desktop and mobile viewports.

*Major events*
* [fill in: decisions, blockers, anything the team discussed]

*Rolled-over stories*
* TM09-127, TM09-128, TM09-139, TM09-140, TM09-151 and TM09-161 were moved to Sprint 9. The first five were already finished in the repo and are closed in Sprint 9.

*Worklogs*
* [link the PRs or commits for each story]

*Backlog refinement*
* [fill in]

*Follow-up*
* PR 13 (swipes, saved and reports fixes) and PR 14 (listing detail view) are still open on the team repo.
* Post moved from the bottom tab bar to the Browse header; the navigation e2e spec was updated to match.
```

### TM09-196 · Retrospective

```
Attendance: [who attended]

||Team Member||Went Well?||Could be Better?||How could be fixed?||Specific Actions||
|Tareq Haque|[...]|[...]|[...]|[...]|
|Tamar Shuster|[...]|[...]|[...]|[...]|
|Chris Martinez-Rivas|[...]|[...]|[...]|[...]|
|Chang Chang|[...]|[...]|[...]|[...]|
```
