import { test, expect, page, webkit, locator } from "@playwright/test";
import { serData } from "../data/fetchdata.json";
import  GooglePage  from "../pages/googlepage.js";

test.describe("Searching banking data", () => {
  let page;
  test.beforeEach(async ({ browser }) => {
    page = await browser.newPage();
    page.goto("https://www.google.com/");
  });
  serData.forEach((item, index) => {
    test(`Search ${index + 1}`, async () => {
      const googlePage = new GooglePage(page);
      await googlePage.searchData(
        serData[index].bank,
        serData[index].headBranch
      );
      await page.waitForTimeout(1000);
    });
  });
});
