export default function regex(str: string) {
	const matches = str.match(/o(?=oo)/g)
	return matches?.length ?? 0
}
