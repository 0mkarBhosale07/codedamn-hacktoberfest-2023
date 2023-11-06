import crypto from "crypto";

export function hashSHA256(input) {
	const hash = crypto.createHash("sha256");
	hash.update(input);
	return hash.digest('hex');
}

export function hashMD5(input) {
	const hash = crypto.createHash("md5");
	hash.update(input);
	return hash.digest('hex');
}

export function hashSHA1(input) {
	const hash = crypto.createHash("sha1");
	hash.update(input);
	return hash.digest('hex');
}

// Sample Tests
console.log(hashMD5("lois-test-string"));
