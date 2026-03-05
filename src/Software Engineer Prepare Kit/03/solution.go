package main

import (
	"regexp"
	"strings"
)

func IsAlphabeticPalindrome(code string) bool {
	var head uint16 = 0
	var tail uint16 = uint16(len(code) - 1)

	regex := regexp.MustCompile(`[^a-zA-Z]`)

	for head < tail {
		for head < tail && regex.MatchString(string(code[head])) {
			head++
		}

		for tail > head && regex.MatchString(string(code[tail])) {
			tail--
		}

		if !strings.EqualFold(string(code[head]), string(code[tail])) {
			return false
		}

		head++
		tail--
	}

	return true
}
