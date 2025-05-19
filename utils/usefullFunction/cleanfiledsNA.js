function removeNAFields(obj) {
    if (Array.isArray(obj)) {
      return obj
        .map(removeNAFields)
        .filter(item => item !== undefined && Object.keys(item || {}).length > 0);
    }
  
    if (typeof obj === 'object' && obj !== null) {
      const newObj = {};
      for (const key in obj) {
        const value = obj[key];
  
        // Check for values to skip
        const isInvalid =
          value === 'NA' ||
          value === null ||
          value === '' ||
          (typeof value === 'string' && value.trim().toUpperCase() === 'NA');
  
        if (!isInvalid) {
          const cleanedValue = removeNAFields(value);
          if (
            cleanedValue !== undefined &&
            !(typeof cleanedValue === 'object' && Object.keys(cleanedValue).length === 0)
          ) {
            newObj[key] = cleanedValue;
          }
        }
      }
      return Object.keys(newObj).length > 0 ? newObj : undefined;
    }
  
    return obj;
  }
  
  module.exports = { removeNAFields };
  