import fs from 'fs';
import path from 'path';
export async function loadJsonFile(filename) {
  const filePath = path.join(__dirname,'../../test-data/expected', filename);
  console.log('Loading JSON file:', filePath); 
  if (!fs.existsSync(filePath)) {
    throw new Error(`File not found: ${filePath}`);
  }
  const fileContents = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(fileContents);
}

export async function saveActualResponse(relativeFilePath, data) {
  const actualPath = path.resolve('test-data/actual', relativeFilePath);
  const dir = path.dirname(actualPath);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(actualPath, JSON.stringify(data, null, 2), 'utf8');
}
