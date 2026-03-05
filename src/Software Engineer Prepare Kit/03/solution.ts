export default function isAlphabeticPalindrome(code: string): boolean {
	let i = 0
	let j = code.length - 1

	while (i < j) {
		while (i < j && code[i]!.match(/[^a-zA-Z]/)) i++
		while (j > i && code[j]!.match(/[^a-zA-Z]/)) j--

		if (code[i]!.toLowerCase() === code[j]!.toLowerCase()) {
			i++
			j--
		} else {
			return false
		}
	}

	return true
}
