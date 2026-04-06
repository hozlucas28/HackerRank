export default function regex(lines: string[]) {
	const regex = new RegExp(
		/^\d{5}\s(?:C|CPP|JAVA|PYTHON|PERL|PHP|RUBY|CSHARP|HASKELL|CLOJURE|BASH|SCALA|ERLANG|CLISP|LUA|BRAINFUCK|JAVASCRIPT|GO|D|OCAML|R|PASCAL|SBCL|DART|GROOVY|OBJECTIVEC)$/
	)
	const results: string[] = []

	for (const line of lines) {
		results.push(regex.test(line) ? "VALID" : "INVALID")
	}

	return results
}
