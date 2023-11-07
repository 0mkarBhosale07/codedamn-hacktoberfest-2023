//First run these commands
//npm i jsonwebtoken
//npm i node-fetch
//to satisfy 1st case

import jwt from "jsonwebtoken";
console.log("JWT Lab");

const payload = { username: "codedamn" };
const secretKey = "some-secret-key";

const token = jwt.sign(payload,secretKey);
console.log("Token:", token);

const decodedPayload = jwt.decode(token);
console.log("Decoded Payload:", decodedPayload);

const verified = jwt.verify(token,secretKey);
console.log("Verified:", verified);

export { token, decodedPayload, verified };