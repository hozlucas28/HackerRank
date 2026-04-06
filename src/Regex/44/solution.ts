export default function regex(phoneNumbers: string[]): string[] {
	const results: string[] = []

	const regex = new RegExp(/^(?<countryCode>\d{1,3})(?:-| )(?<localAreaCode>\d{1,3})(?:-| )(?<_number>\d{4,10})$/)

	for (const phoneNumber of phoneNumbers) {
		const matches = phoneNumber.match(regex)
		const { countryCode, localAreaCode, _number } = matches!.groups!
		results.push(`CountryCode=${countryCode},LocalAreaCode=${localAreaCode},Number=${_number}`)
	}

	return results
}
