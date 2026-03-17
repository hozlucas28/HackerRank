package main

const BUFFER_SIZE int = len("20")*20 + 19

func Permute(n uint8, fnResults []uint8) []uint8 {
	permutations := make([]uint8, n)

	for i := range fnResults {
		y := fnResults[i]
		permutations[i] = fnResults[y-1]
	}

	return permutations
}
