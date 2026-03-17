package main

func Inverse(n uint8, fnResults []uint8) []uint8 {
	inverseFnResults := make([]uint8, n)

	for i := range fnResults {
		x := uint8(i) + 1
		y := fnResults[i]
		inverseFnResults[y-1] = x
	}

	return inverseFnResults
}
