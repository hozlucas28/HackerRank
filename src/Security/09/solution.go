package main

func DifferentEncryptions(n uint8) uint32 {
	var encryptions uint32 = 1

	for i := range n {
		encryptions *= (uint32(i) + 1)
	}

	return encryptions
}
