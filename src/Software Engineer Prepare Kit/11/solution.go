package main

func CountAffordablePairs(prices []int32, budget int32) int32 {
	var affordablePairs int32

	var left int32 = 0
	var right int32 = int32(len(prices)) - 1

	for left < right {
		if prices[left]+prices[right] <= budget {
			affordablePairs += right - left
			left++
		} else {
			right--
		}
	}

	return affordablePairs
}
