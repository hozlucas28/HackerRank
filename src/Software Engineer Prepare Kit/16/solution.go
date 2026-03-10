package main

import "maps"

func IsAnagram(s string, t string) int32 {
	if len(s) != len(t) {
		return 0
	}

	sChars := make(map[byte]int16)
	tChars := make(map[byte]int16)

	for i := 0; i < len(s); i++ {
		sChars[s[i]] += 1
		tChars[t[i]] += 1
	}

	if maps.Equal(sChars, tChars) {
		return 1
	}

	return 0
}
