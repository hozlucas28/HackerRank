package main

func GenerateAngleBracketSequences(n int32) []string {
	if n <= 0 {
		return []string{}
	}

	results := make([]string, 0)

	var backtrack func(currentSequence string, openCount int32, closeCount int32)
	backtrack = func(currentSequence string, openCount int32, closeCount int32) {
		if int32(len(currentSequence)) == 2*n {
			results = append(results, currentSequence)
			return
		}

		if openCount < n {
			backtrack(currentSequence+"<", openCount+1, closeCount)
		}

		if closeCount < openCount {
			backtrack(currentSequence+">", openCount, closeCount+1)
		}
	}

	backtrack("", 0, 0)

	return results
}
