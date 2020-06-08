const fs = require("fs");
const colors = require("colors");

const tableList = (base, limit) => {
  return new Promise((resolve, reject) => {
    if (!Number(base)) {
      reject(`El valor base de  ${base} no es un numero`);
      return;
    } else if (!Number(limit)) {
      reject(`El valor limite de  ${limit} no es un numero`);
      return;
    }

    console.log("================".rainbow);
    console.log(`tabla del ${base}`.underline.trap);
    console.log("================".rainbow);

    for (let i = 0; i <= limit; i++) {
      let result = `${base} x ${i} = ${base * i}\n`;
      resolve(console.log(result));
    }
  });
};

const counter = (base, limite = 10) => {
  return new Promise((resolve, reject) => {
    let data = "";
    if (!Number(base)) {
      reject(`El valor de  ${base} no es un numero`);
      return;
    }

    for (let i = 0; i <= limite; i++) {
      let result = `${base} x ${i} = ${base * i}\n`;
      data += result;
    }

    fs.writeFile(`../tablas/tabla-${base}.txt`, data, (err) => {
      if (err) reject(err);
      else resolve(`tabla-${base}.txt`);
    });
  });
};

module.exports = {
  counter,
  tableList,
};
