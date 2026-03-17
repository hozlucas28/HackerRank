package main

const BUFFER_SIZE = len("20")*20 + 19

func IsInvolution(fnResults []uint8) bool {
	for i := range fnResults {
		x := uint8(i) + 1
		y := fnResults[i]
		permutation := fnResults[y-1]

		if permutation != x {
			return false
		}
	}

	return true
}
