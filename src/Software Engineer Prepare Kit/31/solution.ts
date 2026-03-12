class Stack<T> {
	private stack: T[]
	constructor() {
		this.stack = []
	}

	getTop(): T | undefined {
		return this.stack.at(-1)
	}

	push(data: T): void {
		this.stack.push(data)
	}

	pop(): T | undefined {
		return this.stack.pop()
	}
}

/*
 * Complete the 'findNextGreaterElementsWithDistance' function below.
 *
 * The function is expected to return a 2D_INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY readings as parameter.
 */

export default function findNextGreaterElementsWithDistance(readings: number[]): number[][] {
	if (!readings.length) return []

	const stack = new Stack<[number, number]>()
	const collection = Array.from({ length: readings.length }, () => [-1, -1])

	stack.push([Infinity, Infinity])
	stack.push([readings[0]!, 0])

	for (let i = 0; i < readings.length; i++) {
		const reading = readings[i]!
		let stackTop = stack.getTop()!

		while (reading > stackTop[0]) {
			collection[stackTop[1]] = [reading, i - stackTop[1]]
			stack.pop()
			stackTop = stack.getTop()!
		}

		stack.push([reading, i])
	}

	return collection
}
