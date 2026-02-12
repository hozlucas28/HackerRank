export default function countResponseTimeRegressions(responseTimes: number[]): number {
	let prevTimesTotal = responseTimes[0]
	let timesGreaterThanAverage = 0

	for (let i = 1; i < responseTimes.length; i++) {
		const time = responseTimes[i]!
		const prevTimesAverage = prevTimesTotal! / i

		timesGreaterThanAverage += ~~(time > prevTimesAverage)
		prevTimesTotal! += time
	}

	return timesGreaterThanAverage
}
