export default function fn(intervals: number[][]): number[][] {
	if (!intervals.length) return []

	const _intervals = intervals.toSorted((a, b) => a[0]! - b[0]!) as [number, number][]
	const mergedIntervals = [_intervals.shift()!]

	for (const currentInterval of _intervals) {
		const lastMergedInterval = mergedIntervals.at(-1)!

		if (currentInterval[0] <= lastMergedInterval[1]) {
			// Overlap intervals
			lastMergedInterval[1] = Math.max(currentInterval[1], lastMergedInterval[1])
		} else {
			// Append interval
			mergedIntervals.push(currentInterval)
		}
	}

	return mergedIntervals
}
