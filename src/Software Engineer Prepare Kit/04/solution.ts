export default function isNonTrivialRotation(s1: string, s2: string): boolean {
	if (s1.length !== s2.length || s1 === s2) return false

	const s1Plus = s1 + s1

	return s1Plus.includes(s2)
}
