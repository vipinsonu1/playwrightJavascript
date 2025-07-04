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





//----------------------------------------------------------------------
// fetching data from excel file while paseing sheet name or index
function getTestData(FileName, testCaseName, sheetIdentifier = 0) {
  const trimmedFileName = FileName.trim();
  const r2FilePath = path.join(__dirname, `../testData/R2ChannelTestData/${trimmedFileName}`);
  const r3FilePath = path.join(__dirname, `../testData/R3ChannelTestData/${trimmedFileName}`);
  let filePath = null;

  if (fs.existsSync(r2FilePath)) {
    filePath = r2FilePath;
  } else if (fs.existsSync(r3FilePath)) {
    filePath = r3FilePath;
  } else {
    throw new Error(`File not found: ${filePath}`);
  }

  const workbook = xlsx.readFile(filePath);

  // Get sheet name by index or name
  let sheetName;
  if (typeof sheetIdentifier === 'number') {
    const sheetNames = workbook.SheetNames;
    if (sheetIdentifier < 0 || sheetIdentifier >= sheetNames.length) {
      throw new Error(`Sheet index ${sheetIdentifier} out of range`);
    }
    sheetName = sheetNames[sheetIdentifier];
  } else if (typeof sheetIdentifier === 'string') {
    if (!workbook.Sheets[sheetIdentifier]) {
      throw new Error(`Sheet name "${sheetIdentifier}" not found`);
    }
    sheetName = sheetIdentifier;
  } else {
    throw new Error('sheetIdentifier must be a string (sheet name) or number (sheet index)');
  }

  const worksheet = workbook.Sheets[sheetName];
  const jsonData = xlsx.utils.sheet_to_json(worksheet);

  return jsonData.find(row => row.TestCaseID?.trim() === testCaseName.trim());
}