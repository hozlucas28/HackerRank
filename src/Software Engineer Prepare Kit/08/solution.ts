export default function areBracketsProperlyMatched(code_snippet: string): boolean {
	const stack = []

	for (const char of code_snippet) {
		if (char.match(/[^(){}[\]]/)) continue

		if (["(", "[", "{"].includes(char)) {
			stack.push(char)
		} else if (char === ")") {
			const lastPushed = stack.pop()
			if (lastPushed !== "(") return false
		} else if (char === "}") {
			const lastPushed = stack.pop()
			if (lastPushed !== "{") return false
		} else {
			const lastPushed = stack.pop()
			if (lastPushed !== "[") return false
		}
	}

	return !stack.length
}
