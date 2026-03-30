export default function regex(str: string) {
	const matches = str.match(/^(?:[a-zA-Z]|[02468]){40}(?:[13579]|\s){5}$/)
	return !!matches
}
