const { test, expect } = require('@playwright/test');
const readExcel = require('../utils/dataDriven/readExcel.js');
const testData = readExcel('C:/Users/vipin/OneDrive/Documents/projects/highproject/data/excelData.xlsx', 'Sheet1');

test.describe('Excel Data Driven Tests', () => {
  testData.forEach((data, index) => {
    test(`Test Case ${index + 1}: ${data.Name}`, async ({ page }) => {
      await page.goto('https://example.com');
     // await page.fill('#name', data.Name);
      console.log("Name:  ", data.Name)
      //await page.fill('#age', data.Age.toString());
      console.log("age:  ", data.Age.toString())
      //await page.fill('#email', data.Email);
      console.log("email:  ", data.Email)
      //await page.click('#submit');
      //expect(await page.textContent('#result')).toContain('Success');
    });
  });
});
