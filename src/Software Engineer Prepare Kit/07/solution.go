package main

import "sort"

func MaximizeNonOverlappingMeetings(meetings [][]int32) int32 {
	sort.Slice(meetings, func(i, j int) bool {
		return meetings[i][1] < meetings[j][1]
	})

	var maxNonOverlappingMeetings int32 = 1

	for i := range meetings {
		var nonOverlappingMeetings int32 = 1

		for j := i + 1; j < len(meetings); j++ {
			if meetings[i][1] <= meetings[j][0] {
				meetings[i][1] = meetings[j][1]
				nonOverlappingMeetings += 1
			}
		}

		maxNonOverlappingMeetings = max(
			nonOverlappingMeetings,
			maxNonOverlappingMeetings,
		)
	}

	return maxNonOverlappingMeetings
}
