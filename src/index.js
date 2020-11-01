import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
function generateCode(obj) {
  //return a code generated string

  function camelCase(str) {
    return str.includes("-")
      ? str.split("-")[0] +
          str.split("-")[1].charAt(0).toUpperCase() +
          str.split("-")[1].substring(1)
      : str;
  }

  function getChilds(arr) {
    let result = "";
    arr.forEach((el) => {
      result += generateCode(el);
    });
    return result;
  }

  function getStyle(obj) {
    if (!obj) {
      return "";
    }
    if (Object.keys(obj).length === 0) {
      return "";
    }
    let result = " style={{";
    Object.keys(obj).forEach((key, index) => {
      result =
        result +
        camelCase(key) +
        ':"' +
        obj[key] +
        '"' +
        (index === Object.keys(obj).length - 1 ? "" : ",");
    });
    result = result + "}}";
    return result;
  }

  return `<${obj.name}${getStyle(obj.style)}${
    obj.children && obj.children.length > 0 ? ">" : "/>"
  } 
    ${obj.children && obj.children.length > 0 ? getChilds(obj.children) : ""}${
    obj.children && obj.children.length > 0 ? "</" + obj.name + ">" : ""
  }`;
}

module.exports = generateCode;