class Stack<T> {
	private stack: [T, T][]

	constructor() {
		this.stack = []
	}

	push(element: T) {
		let minimum = (this.stack.at(-1) ?? [element, element])[1]
		if (element < minimum) minimum = element

		this.stack.push([element, minimum])
	}

	pop() {
		if (!this.stack.length) throw new Error("Stack empty")
		this.stack.pop()
	}

	top(): T {
		if (!this.stack.length) throw new Error("Stack empty")
		return this.stack.at(-1)![0]
	}

	getMin(): T {
		if (!this.stack.length) throw new Error("Stack empty")
		return this.stack.at(-1)![1]
	}
}

export default function processCouponStackOperations(operations: string[]): number[] {
	const stack = new Stack<number>()
	const outputs: number[] = []

	for (const operation of operations) {
		const data = operation.split(" ")
		const method = data[0] as keyof Stack<number>

		switch (method) {
			case "push":
				const elementToPush = parseInt(data[1]!)
				stack.push(elementToPush)
				break

			case "pop":
				stack.pop()
				break

			case "top":
				outputs.push(stack.top())
				break

			case "getMin":
				outputs.push(stack.getMin())
				break
		}
	}

	return outputs
}
