const xlsx = require('xlsx');

function readExcel(filePath, sheetName) {
  const workbook = xlsx.readFile(filePath);
  const worksheet = workbook.Sheets[sheetName];
  return xlsx.utils.sheet_to_json(worksheet);
}

module.exports = readExcel; 

// const xlsx = require('xlsx');

// function readExcel(filePath, sheetName) {
//   try {
//     if (!filePath || !sheetName) {
//       throw new Error("Both file path and sheet name are required.");
//     }

//     const workbook = xlsx.readFile(filePath);
//     const worksheet = workbook.Sheets[sheetName];

//     if (!worksheet) {
//       throw new Error(`Sheet "${sheetName}" not found.`);
//     }

//     return xlsx.utils.sheet_to_json(worksheet);
//   } catch (error) {
//     console.error("Error reading Excel file:", error.message);
//     return null;
//   }
// }

// module.exports = { readExcel };
