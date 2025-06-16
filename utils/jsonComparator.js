const { expect } = require('@playwright/test');

function compareJsonIgnoringKeys(actual, expected, ignoreKeys = []) {
  for (const key in expected) {
    if (ignoreKeys.includes(key)) continue;

    const expectedVal = expected[key];
    const actualVal = actual[key];

    if (typeof expectedVal === 'object' && expectedVal !== null && !Array.isArray(expectedVal)) {
      compareJsonIgnoringKeys(actualVal, expectedVal, ignoreKeys);
    } else if (Array.isArray(expectedVal)) {
      expect(Array.isArray(actualVal)).toBe(true);
      expect(actualVal.length).toBe(expectedVal.length);
      for (let i = 0; i < expectedVal.length; i++) {
        compareJsonIgnoringKeys(actualVal[i], expectedVal[i], ignoreKeys);
      }
    } else {
      expect(actualVal).toBe(expectedVal);
    }
  }
}

module.exports = { compareJsonIgnoringKeys };
