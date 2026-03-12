package main

var PHONE_DIGITS = [10]string{
	"0",
	"1",
	"abc",
	"def",
	"ghi",
	"jkl",
	"mno",
	"pqrs",
	"tuv",
	"wxyz",
}

func MinTasksToCancelForNoConflict(digits string) []string {
	if len(digits) == 0 {
		return []string{}
	}

	var combinations []string

	var backtrack func(index int, path []byte)

	backtrack = func(index int, path []byte) {
		if index == len(digits) {
			combinations = append(combinations, string(path))
			return
		}

		digit := digits[index] - '0'
		letters := PHONE_DIGITS[digit]

		for _, letter := range letters {
			path = append(path, byte(letter))
			backtrack(index+1, path)
			path = path[:len(path)-1]
		}
	}

	backtrack(0, make([]byte, 0, len(digits)))

	return combinations
}
