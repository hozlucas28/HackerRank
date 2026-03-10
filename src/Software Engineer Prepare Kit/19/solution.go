package main

func GetAutoSaveInterval(n int32) int64 {
	if n < 2 {
		return int64(n + 1)
	}

	sequence := [2]int64{1, 2}

	for range n - 1 {
		sum := sequence[0] + sequence[1]
		sequence[0] = sequence[1]
		sequence[1] = sum
	}

	return sequence[1]
}
