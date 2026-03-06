export default function maximizeNonOverlappingMeetings(meetings: number[][]): number {
	meetings.sort((a, b) => {
		return a[1]! - b[1]!
	})

	let maxNonOverlappingMeetings = 1

	for (let i = 0; i < meetings.length; i++) {
		let nonOverlappingMeetings = 1

		for (let j = i + 1; j < meetings.length; j++) {
			if (meetings[i]![1]! <= meetings[j]![0]!) {
				meetings[i]![1]! = meetings[j]![1]!
				nonOverlappingMeetings += 1
			}
		}

		maxNonOverlappingMeetings = Math.max(nonOverlappingMeetings, maxNonOverlappingMeetings)
	}

	return maxNonOverlappingMeetings
}
