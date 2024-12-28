const CryptoJS = require("crypto-js");

const generateHashDictionary = () => {
  const hashDictionary = {};
  for (let i = 1; i <= 10000; i++) {
    const hash = CryptoJS.MD5(i.toString()).toString();
    hashDictionary[hash] = i.toString();
  }
  return hashDictionary;
};

// Generar y mostrar el diccionario
const hashDictionary = generateHashDictionary();
console.log(JSON.stringify(hashDictionary, null, 2));
