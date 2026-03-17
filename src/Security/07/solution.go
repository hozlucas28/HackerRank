package main

import (
	"strconv"
)

const BUFFER_SIZE = 10 + 1

var ALPHABET = [10]byte{'0', '1', '2', '3', '4', '5', '6', '7', '8', '9'}

func RecodeMessage(message string) string {
	recodedMessage := make([]byte, len(message))

	for i, letter := range message {
		digit, _ := strconv.ParseUint(string(letter), 10, 8)
		newDigit := ALPHABET[(uint8(digit)+1)%10]

		recodedMessage[i] = newDigit
	}

	return string(recodedMessage)
}
