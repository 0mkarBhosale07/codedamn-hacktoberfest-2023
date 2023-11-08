import fs from "fs/promises";

export async function changeFilePermissions(path) {
	try {
		await fs.chmod(path, 0o666); // use octal literal
		return true;
	} catch (error) {
		return false; // return false instead of error
	}
}

export async function changeFileOwner(path, uid, gid) {
	try {
		await fs.chown(path, uid, gid); // add await keyword
		return true;
	} catch (error) {
		return false; // return false instead of error
	}
}
