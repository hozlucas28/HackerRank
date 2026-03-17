package main

import (
	"slices"
)

const BUFFER_SIZE int = 255 + 1

func DecodeMessages(n uint8, keywords []string, cipherMessages []string) []string {
	decodedMessages := make([]string, n)

	for i, keyword := range keywords {
		cipherMessage := cipherMessages[i]

		alphabet := make([]bool, 26)
		collection := make([][]byte, 1)

		collection[0] = make([]byte, 0)
		for _, char := range keyword {
			if !alphabet[char-65] {
				collection[0] = append(collection[0], byte(char))
				alphabet[char-65] = true
			}
		}

		var counter uint8
		for counter < 26 {
			row := make([]byte, len(collection[0]))
			for j := 0; j < len(row) && counter < 26; counter++ {
				if !alphabet[counter] {
					row[j] = counter + 65
					j++
				}
			}

			collection = append(collection, row)
		}

		transposedCollection := make([][]byte, len(collection[0]))
		for j := range collection[0] {
			transposedCollection[j] = make([]byte, len(collection))
			for k := range collection {
				transposedCollection[j][k] = collection[k][j]
			}
		}

		slices.SortFunc(transposedCollection, func(a []byte, b []byte) int {
			return int(a[0]) - int(b[0])
		})

		decryptionAlphabet := make(map[byte]byte, 26)

		counter = 0
		for _, row := range transposedCollection {
			for _, col := range row {
				if col != 0 {
					decryptionAlphabet[col] = counter + 65
					counter++
				}
			}
		}

		decodedMessage := make([]byte, len(cipherMessage))
		for j, char := range cipherMessage {
			if char == ' ' {
				decodedMessage[j] = ' '
			} else {
				decodedMessage[j] = decryptionAlphabet[byte(char)]
			}
		}

		decodedMessages[i] = string(decodedMessage)
	}

	return decodedMessages
}
