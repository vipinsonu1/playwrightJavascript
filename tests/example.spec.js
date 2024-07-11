// @ts-check
//const { test, expect } = require("@playwright/test");
import { test, expect } from "@playwright/test";
import ENV from "../utils/env.js";
test("has title", async ({ page }) => {
  console.log("Url coming from env file : ", ENV.BASE_URL);
  console.log("Username coming from env file name:  ", ENV.USERNAME);
  await page.goto(ENV.BASE_URL);
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test("get started link", async ({ page }) => {
  await page.goto("https://playwright.dev/");

  // Click the get started link.
  await page.getByRole("link", { name: "Get started" }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(
    page.getByRole("heading", { name: "Installation" })
  ).toBeVisible();
});
