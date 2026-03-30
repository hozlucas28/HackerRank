export default function regex(str: string) {
	const matches = str.match(/^\D[^aeiou][^bcDF]\S[^AEIOU][^.,]$/)
	return !!matches
}
