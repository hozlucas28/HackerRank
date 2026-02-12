package main

func CountResponseTimeRegressions(responseTimes []int32) int32 {
	if len(responseTimes) < 2 {
		return 0
	}

	var prevTimesTotal int64 = int64(responseTimes[0])
	var timesGreaterThanAverage int32

	for i := 1; i < len(responseTimes); i++ {
		time := responseTimes[i]
		prevTimesAverage := float64(prevTimesTotal) / float64(i)

		if float64(time) > prevTimesAverage {
			timesGreaterThanAverage++
		}

		prevTimesTotal += int64(time)
	}

	return timesGreaterThanAverage
}
