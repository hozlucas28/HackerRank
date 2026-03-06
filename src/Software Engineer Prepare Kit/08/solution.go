package main

import "regexp"

func AreBracketsProperlyMatched(code_snippet string) bool {
	stack := make([]rune, 0)

	nonBracketsReg := regexp.MustCompile(`[^(){}[\]]`)
	openBracketsReg := regexp.MustCompile(`[({[]`)

	for _, char := range code_snippet {
		if nonBracketsReg.MatchString(string(char)) {
			continue
		}

		if openBracketsReg.MatchString(string(char)) {
			stack = append(stack, char)
			continue
		}

		var lastAppendedChar rune
		if len(stack) != 0 {
			lastAppendedChar = stack[len(stack)-1]
		}

		switch char {
		case ')':
			if lastAppendedChar == '(' {
				stack = stack[:len(stack)-1]
			} else {
				return false
			}

		case '}':
			if lastAppendedChar == '{' {
				stack = stack[:len(stack)-1]
			} else {
				return false
			}

		case ']':
			if lastAppendedChar == '[' {
				stack = stack[:len(stack)-1]
			} else {
				return false
			}
		}
	}

	return len(stack) == 0
}
