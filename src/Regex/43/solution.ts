export default function regex(code: string): string {
	const cRegex = new RegExp(/#\s*include\s*[<"'].*[>"']|#\s*define\s+.*/, "g")
	const javaRegex = new RegExp(/(?<=\b)import .*?;|(?:public|private|package)?\s+class\s+\w+\s*{/, "g")

	if (code.match(cRegex)) {
		return "C"
	} else if (code.match(javaRegex)) {
		return "Java"
	}

	return "Python"
}
