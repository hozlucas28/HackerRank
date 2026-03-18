package main

import (
	"bufio"
	"fmt"
	"os"
	"strconv"
	"strings"
)

const BUFFER_SIZE = len("999")*10 + 9 + 1

const (
	M       = uint64(0x5DEECE66D)
	C       = uint64(0xB)
	MASK    = uint64((1 << 48) - 1)
	M_prime = M & 0x7FFFFFFF
)

func NextRndNumbers(rndNumbers []uint64) []uint64 {
	var T [9]uint64
	for i := range 9 {
		T[i] = (rndNumbers[i+1] - 5*rndNumbers[i]) & 7
	}

	var S1 uint64
	found := false

	for Y1 := range 131072 {
		validY := true
		Y := uint64(Y1)
		for i := range 9 {
			prod := Y*M + C
			D := prod >> 17

			if (D & 7) != T[i] {
				validY = false
				break
			}

			Y = prod & 0x1FFFF
		}

		if !validY {
			continue
		}

		var D [9]uint64
		Y = uint64(Y1)
		for i := range 9 {
			prod := Y*M + C
			D[i] = prod >> 17
			Y = prod & 0x1FFFF
		}

		for k1 := range 2147484 {
			v := rndNumbers[0] + 1000*uint64(k1)
			validK := true
			for i := range 9 {
				v = (v*M_prime + D[i]) & 0x7FFFFFFF
				if (v % 1000) != rndNumbers[i+1] {
					validK = false
					break
				}
			}

			if validK {
				S1 = ((rndNumbers[0] + 1000*uint64(k1)) << 17) | uint64(Y1)
				found = true
				break
			}
		}

		if found {
			break
		}
	}

	seed := S1
	for range 9 {
		seed = (seed*M + C) & MASK
	}

	result := make([]uint64, 10)
	for i := range 10 {
		seed = (seed*M + C) & MASK
		result[i] = (seed >> 17) % 1000
	}

	return result
}

func main() {
	reader := bufio.NewReaderSize(os.Stdin, BUFFER_SIZE)

	tmpN, err := strconv.ParseUint(readLine(reader), 10, 8)
	if err != nil {
		panic(err)
	}

	n := uint8(tmpN)

	for range n {
		tmpRndNumbers := strings.Split(readLine(reader), " ")

		rndNumbers := make([]uint64, len(tmpRndNumbers))
		for i := range rndNumbers {
			tmpRndNumber, _ := strconv.ParseUint(tmpRndNumbers[i], 10, 64)
			rndNumbers[i] = uint64(tmpRndNumber)
		}

		result := NextRndNumbers(rndNumbers)

		for i, rndNumber := range result {
			fmt.Printf("%d", rndNumber)

			if i < len(result)-1 {
				fmt.Printf(" ")
			} else {
				fmt.Printf("\n")
			}
		}
	}
}

func readLine(reader *bufio.Reader) string {
	line, _, err := reader.ReadLine()
	if err != nil {
		return ""
	}

	return strings.Trim(string(line), " \t\r\n")
}
