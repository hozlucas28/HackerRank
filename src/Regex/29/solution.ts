export default function main(usernames: string[]) {
	const regex = new RegExp(/^[_.]\d+[a-zA-Z]*_?$/)
	const results: string[] = []

	for (const username of usernames) {
		results.push(regex.test(username) ? "VALID" : "INVALID")
	}

	return results
}
