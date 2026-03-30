export default function regex(str: string) {
	const matches = str.match(/(?<!a|e|i|o|u|A|E|I|O|U)./g)
	return matches?.length ?? 0
}
