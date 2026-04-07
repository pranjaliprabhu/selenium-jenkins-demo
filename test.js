require('dotenv').config({
  path: './.env'
});


const name = process.env.NAME || "Default Name";
const msg = process.env.MESSAGE || "Default Message";

console.log(name);
console.log(msg);