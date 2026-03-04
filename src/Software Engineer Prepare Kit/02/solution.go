package main

func FindSmallestMissingPositive(orderNumbers []int32) int32 {
	length := int32(len(orderNumbers))

	for i := int32(0); i < length; {
		number := orderNumbers[i]

		if number > 0 && number <= length && orderNumbers[number-1] != number {
			orderNumbers[i], orderNumbers[number-1] = orderNumbers[number-1], orderNumbers[i]
		} else {
			i++
		}
	}

	for i := range length {
		if orderNumbers[i] != i+1 {
			return i + 1
		}
	}

	return length + 1
}
