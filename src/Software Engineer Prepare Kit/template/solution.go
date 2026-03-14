package main

import "math/big"

func CountInstallationSequences(n int32) string {
	if n == 0 || n == 1 {
		return "1"
	}

	aux := big.NewInt(0)
	resultStore := [2]*big.Int{
		big.NewInt(1),
		big.NewInt(1),
	}

	for i := 2; int32(i) < n; i++ {
		aux.Add(resultStore[0], resultStore[1])
		resultStore[0].Set(resultStore[1])
		resultStore[1].Set(aux)
	}

	return aux.Add(resultStore[0], resultStore[1]).String()
}
