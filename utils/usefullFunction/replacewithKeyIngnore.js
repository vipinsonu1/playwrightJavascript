function replaceKeysWithIgnore(obj, keysToIgnore = []) {
    if (Array.isArray(obj)) {
      return obj.map(item => replaceKeysWithIgnore(item, keysToIgnore));
    }
  
    if (typeof obj === 'object' && obj !== null) {
      const newObj = {};
      for (const key in obj) {
        if (keysToIgnore.includes(key)) {
          newObj[key] = 'ignore';
        } else {
          newObj[key] = replaceKeysWithIgnore(obj[key], keysToIgnore);
        }
      }
      return newObj;
    }
  
    return obj;
  }
  
  module.exports = { replaceKeysWithIgnore };