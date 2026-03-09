export default function countAffordablePairs(prices: number[], budget: number): number {
	let affordablePairs = 0

	let left = 0
	let right = prices.length - 1

	while (left < right) {
		if (prices[left]! + prices[right]! <= budget) {
			affordablePairs += right - left
			left++
		} else {
			right--
		}
	}

	return affordablePairs
}
