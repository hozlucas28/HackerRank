export default function regex(str: string) {
	const matches = str.match(/^[1-3][0-2](?:x|s|0)(?:3|0|A|a)(?:x|s|u)(?:\.|,)$/)
	return !!matches
}
