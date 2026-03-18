package main

import (
	"bufio"
	"fmt"
	"os"
	"sort"
	"strings"
)

const DICTIONARY_PATH string = "dictionary.lst"

func getPattern(word string) string {
	var pattern []byte

	seen := make(map[byte]byte)
	nextId := byte('A')

	for i := range word {
		char := word[i]

		if val, ok := seen[char]; ok {
			pattern = append(pattern, val)
		} else {
			seen[char] = nextId
			pattern = append(pattern, nextId)
			nextId++
		}
	}

	return string(pattern)
}

func decrypt(dictWords []string, cipherText []string) string {
	if len(cipherText) == 0 {
		return ""
	}

	dictByPattern := make(map[string][]string)
	for _, word := range dictWords {
		pattern := getPattern(word)
		dictByPattern[pattern] = append(dictByPattern[pattern], word)
	}

	var uniqueCipherWords []string
	seenCipher := make(map[string]bool)
	for _, word := range cipherText {
		if !seenCipher[word] {
			seenCipher[word] = true
			uniqueCipherWords = append(uniqueCipherWords, word)
		}
	}

	sort.Slice(uniqueCipherWords, func(i, j int) bool {
		patternI := getPattern(uniqueCipherWords[i])
		patternJ := getPattern(uniqueCipherWords[j])
		lenI := len(dictByPattern[patternI])
		lenJ := len(dictByPattern[patternJ])

		if lenI == lenJ {
			return len(uniqueCipherWords[i]) > len(uniqueCipherWords[j])
		}

		return lenI < lenJ
	})

	cipherToPlain := make(map[byte]byte)
	plainToCipher := make(map[byte]byte)

	var dfs func(int) bool
	dfs = func(idx int) bool {
		if idx == len(uniqueCipherWords) {
			return true
		}

		cipherWord := uniqueCipherWords[idx]
		pattern := getPattern(cipherWord)
		candidates := dictByPattern[pattern]

		for _, dw := range candidates {
			valid := true
			var addedC []byte
			var addedP []byte

			for i := range cipherWord {
				c := cipherWord[i]
				p := dw[i]

				mappedP, hasC := cipherToPlain[c]
				mappedC, hasP := plainToCipher[p]

				if hasC && mappedP != p {
					valid = false
					break
				}

				if hasP && mappedC != c {
					valid = false
					break
				}

				if !hasC && !hasP {
					cipherToPlain[c] = p
					plainToCipher[p] = c
					addedC = append(addedC, c)
					addedP = append(addedP, p)
				}
			}

			if valid {
				if dfs(idx + 1) {
					return true
				}
			}

			for i := range addedC {
				delete(cipherToPlain, addedC[i])
				delete(plainToCipher, addedP[i])
			}
		}
		return false
	}

	if dfs(0) {
		var result []string
		for _, cw := range cipherText {
			var plainWord string
			for i := range cw {
				plainWord += string(cipherToPlain[cw[i]])
			}

			result = append(result, plainWord)
		}

		return strings.Join(result, " ")
	}

	return "" // There is no solution
}

func main() {
	dictFile, err := os.Open(DICTIONARY_PATH)
	if err != nil {
		panic(fmt.Sprintf("\"%s\" not found", DICTIONARY_PATH))
	}

	defer dictFile.Close()

	dictScanner := bufio.NewScanner(dictFile)
	dictScanner.Split(bufio.ScanWords)

	var dictWords []string
	for dictScanner.Scan() {
		dictWords = append(dictWords, strings.ToLower(dictScanner.Text()))
	}

	cipherTextScanner := bufio.NewScanner(os.Stdin)
	cipherTextScanner.Split(bufio.ScanWords)

	var cipherText []string
	for cipherTextScanner.Scan() {
		cipherText = append(cipherText, strings.ToLower(cipherTextScanner.Text()))
	}

	result := decrypt(dictWords, cipherText)

	fmt.Println(result)
}
