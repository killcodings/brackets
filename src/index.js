module.exports = function check(str, bracketsConfig) {
  if (str.length % 2 === 0) {
    let strTemp = "";
    while (str.length > 2) {
      strTemp = str;
      for (let i = 0; i < bracketsConfig.length; i++) {
        str = str.replace(bracketsConfig[i].join(""), "");
      }
      if (strTemp == str) {
        break;
      }
    }
    for (let i = 0; i < bracketsConfig.length; i++) {
      str = str.replace(bracketsConfig[i].join(""), "");
    }
  }
  return str === "" ? true : false;
};
