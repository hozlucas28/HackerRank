package main

func IsBijective(n uint8, fnResults []uint8) bool {
	results := make(map[uint8]bool, n)

	for _, fnResult := range fnResults {
		if fnResult > n || results[fnResult] {
			return false
		} else {
			results[fnResult] = true
		}
	}

	return true
}
