export default function debounceTimestamps(timestamps: number[], K: number): number {
	if (!timestamps.length) return 0

	let lastSaved = 0
	let read = 1

	while (read < timestamps.length) {
		if (timestamps[read]! - timestamps[lastSaved]! >= K) {
			timestamps[lastSaved + 1] = timestamps[read]!
			lastSaved++
		}

		read++
	}

	return lastSaved + 1
}
