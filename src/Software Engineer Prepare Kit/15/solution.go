package main

func FindTaskPairForSlot(taskDurations []int32, slotLength int32) []int32 {
	seenTasks := make(map[int32]int32)

	for i, duration := range taskDurations {
		complement := slotLength - duration

		if _, hasComplement := seenTasks[complement]; hasComplement {
			return []int32{seenTasks[complement], int32(i)}
		}

		seenTasks[duration] = int32(i)
	}

	return []int32{-1, -1}
}
