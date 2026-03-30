export default function regex(str: string) {
	const matches = str.match(/^([a-z])(\w)(\s)(\W)(\d)(\D)([A-Z])([a-zA-Z])([aeiouAEIOU])(\S)\1\2\3\4\5\6\7\8\9\10$/)
	return !!matches
}
