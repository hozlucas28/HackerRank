export default function regex(str: string) {
	const matches = str.match(/^\d{2}(-|---|\.|:)(?:\d{2}\1){2}\d{2}$/)
	return !!matches
}
