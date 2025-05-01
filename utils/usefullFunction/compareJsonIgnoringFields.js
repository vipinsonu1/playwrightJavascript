import { expect } from '@playwright/test';

export async function validateKeysAndValues(expected, actual) {
  for (const key in expected) {
    expect(actual).toHaveProperty(key); 

    const expectedValue = expected[key];
    const actualValue = actual[key];

    
    if (expectedValue === "ignore") {
      continue;
    }

   
    if (Array.isArray(expectedValue)) {
      expect(Array.isArray(actualValue)).toBe(true);
      for (let i = 0; i < expectedValue.length; i++) {
      
        if (expectedValue[i] === "ignore") continue;
        await validateKeysAndValues(expectedValue[i], actualValue[i]);
      }

    } else if (typeof expectedValue === 'object' && expectedValue !== null) {
      await validateKeysAndValues(expectedValue, actualValue);

   
    } else {
      expect(actualValue).toBe(expectedValue);
    }
  }
}

