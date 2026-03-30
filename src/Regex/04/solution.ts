export default function regex(str: string) {
	const matches = str.match(/\S{2}\s\S{2}\s\S{2}/)
	return !!matches
}
