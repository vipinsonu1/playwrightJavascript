import { expect, page, locator } from "@playwright/test";
class GooglePage {
  constructor(page) {
    this.page = page;
    //this.searchInput = page.locator('input[name="q"]');
    this.searchInput= page.getByLabel('Search', { exact: true });
  }
  async searchData(bank, headBranch) {
    await this.searchInput.click();
    await this.searchInput.fill(bank);
    console.log(bank);
    console.log(headBranch);
    await this.page.waitForTimeout(1000);
  }
}
export default GooglePage;
