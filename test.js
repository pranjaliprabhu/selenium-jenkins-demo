require('dotenv').config();

console.log("Test is running...");

const name = process.env.NAME;
const msg = process.env.MESSAGE;

console.log("Name:", name);
console.log("Message:", msg);

console.log("ENV CHECK:", process.env.NAME, process.env.MESSAGE);