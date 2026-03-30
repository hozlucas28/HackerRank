export default function regex(str: string) {
	const matches = str.match(/^(tac)\1(tic)(?:\1{1,}\2?)*$/)
	return !!matches
}
