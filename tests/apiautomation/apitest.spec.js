const { test, expect } = require("@playwright/test");
const { loadJsonFile, saveActualResponse } = require("../../utils/usefullFunction/loadJsonFile");
const { validateKeysAndValues } = require("../../utils/usefullFunction/compareJsonIgnoringFields");

test("testin api", async ({ request }) => {
  const response = await request.get("https://dog.ceo/api/breeds/list/all");
  const s = await response.json();
  const actual = s; 
  await saveActualResponse("userActual.json", actual); // Save the actual response to a file
  console.log("Actual response saved to test-data/actual/userActual.json", actual);
  const expected = await loadJsonFile("userExpected.json");
  await validateKeysAndValues(expected, actual);
  console.log("Comparison completed successfully.");
  });


