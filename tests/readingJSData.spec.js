import { test, expect, page, webkit, locator } from "@playwright/test";
import { searchData } from "../data/fetchData.js";
import GooglePage from "../pages/googlepage.js";

test.describe("Searching banking data", () => {
  let page;
  test.beforeEach(async ({ browser }) => {
    page = await browser.newPage();
    page.goto("https://www.google.com/");
  });
  searchData.forEach((data) => {
    test(`Search ${data.bank}`, async () => {
      const googlePage = new GooglePage(page);
      await googlePage.searchData(data.bank, data.headBranch);
      await page.waitForTimeout(1000);
    });
  });
});
