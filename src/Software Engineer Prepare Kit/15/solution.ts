export default function findTaskPairForSlot(taskDurations: number[], slotLength: number): number[] {
	const seenTasks = new Map<number, number>()

	for (let i = 0; i < taskDurations.length; i++) {
		const currentDuration = taskDurations[i]!
		const neededComplement = slotLength - currentDuration

		if (seenTasks.has(neededComplement)) {
			return [seenTasks.get(neededComplement)!, i]
		}

		seenTasks.set(currentDuration, i)
	}

	return [-1, -1]
}
