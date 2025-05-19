async function removeNAFields(obj) {
    if (Array.isArray(obj)) {
      return obj
        .map(removeNAFields)
        .filter(item => item !== undefined);
    }
  
    if (typeof obj === 'object' && obj !== null) {
      const newObj = {};
      for (const key in obj) {
        const value = obj[key];
        if (value !== 'NA') {
          const cleanedValue = removeNAFields(value);
          if (cleanedValue !== undefined) {
            newObj[key] = cleanedValue;
          }
        }
      }
      return Object.keys(newObj).length > 0 ? newObj : undefined;
    }
  
    return obj;
  }
  
  module.exports = { removeNAFields };