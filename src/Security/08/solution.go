package main

import (
	"strconv"
)

const BUFFER_SIZE = 10 + 1

var ALPHABET = [10]byte{'0', '1', '2', '3', '4', '5', '6', '7', '8', '9'}

func CiphertextMsg(message string, e uint8) string {
	result := make([]byte, len(message))

	for i, char := range message {
		digit, _ := strconv.ParseUint(string(char), 10, 8)
		shiftedDigit := ALPHABET[(uint8(digit)+e)%10]
		result[i] = shiftedDigit
	}

	return string(result)
}
