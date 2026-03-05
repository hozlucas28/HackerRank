package main

import "strings"

func IsNonTrivialRotation(s1 string, s2 string) bool {
	if len(s1) != len(s2) || s1 == s2 {
		return false
	}

	s1Plus := s1 + s1

	return strings.Contains(s1Plus, s2)
}
