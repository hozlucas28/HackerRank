export default function findSmallestMissingPositive(orderNumbers: number[]): number {
	let i = 0
	while (i < orderNumbers.length) {
		const number = orderNumbers[i]!

		if (number > 0 && number <= orderNumbers.length && orderNumbers[number - 1] !== number) {
			;[orderNumbers[i], orderNumbers[number - 1]] = [orderNumbers[number - 1]!, orderNumbers[i]!]
		} else {
			i++
		}
	}

	for (let i = 0; orderNumbers.length; i++) {
		if (orderNumbers[i] != i + 1) return i + 1
	}

	return orderNumbers.length + 1
}
