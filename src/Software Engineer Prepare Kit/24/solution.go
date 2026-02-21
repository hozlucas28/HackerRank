package main

import "sort"

func MergeHighDefinitionIntervals(intervals [][]int32) [][]int32 {
	if len(intervals) == 0 {
		return [][]int32{}
	}

	_intervals := make([][]int32, len(intervals))
	copy(_intervals, intervals)

	sort.Slice(_intervals, func(i int, j int) bool {
		return _intervals[i][0] < _intervals[j][0]
	})

	mergedIntervals := [][]int32{_intervals[0]}

	for i := 1; i < len(_intervals); i++ {
		currentInterval := _intervals[i]
		lastMergedInterval := mergedIntervals[len(mergedIntervals)-1]

		if currentInterval[0] <= lastMergedInterval[1] {
			// Overlap intervals
			lastMergedInterval[1] = max(lastMergedInterval[1], currentInterval[1])
		} else {
			// Append interval
			mergedIntervals = append(mergedIntervals, currentInterval)
		}
	}

	return mergedIntervals
}
