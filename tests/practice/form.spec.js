// form.test.js

import { test, expect } from "@playwright/test";
import formdata from "../../data/formdata.json"

formdata.forEach(({ description, data, expected }) => {
  test(description, async ({ page }) => {
    // Navigate to the page containing the form
    await page.goto('http://localhost:3000/form'); // Replace with your form's URL

    // Fill in the form fields based on JSON data
    await page.fill('input[name="name"]', data.name);
    await page.fill('input[name="email"]', data.email);
    await page.fill('input[name="phone"]', data.phone);
    await page.fill('textarea[name="address"]', data.address);

    // Submit the form
    await page.click('button[type="submit"]');

    // Validate the expected outcome based on JSON expected results
    if (expected.success) {
      // If expected success, verify success message
      await expect(page).toHaveURL(/.*success/); // Assuming the URL changes on success
      await expect(page.locator('.success-message')).toContainText(expected.message);
    } else {
      // If expected failure, verify error messages
      for (const error of expected.errors) {
        await expect(page.locator('.error-message')).toContainText(error);
      }
    }
  });
});
