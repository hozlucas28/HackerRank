package main

func DebounceTimestamps(timestamps []int32, K int32) int32 {
	if len(timestamps) == 0 {
		return 0
	}

	var read int32 = 1
	var lastSaved int32 = 0

	for read < int32(len(timestamps)) {
		if timestamps[read]-timestamps[lastSaved] >= K {
			timestamps[lastSaved+1] = timestamps[read]
			lastSaved++
		}

		read++
	}

	return lastSaved + 1
}
