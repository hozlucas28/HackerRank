import fn, { SinglyLinkedList } from "./solution.ts"
import { expect, test, describe } from "bun:test"

describe("Challenge 34: Reverse even-indexed nodes and append", () => {
	test("Test 01", () => {
		const list = new SinglyLinkedList()
		for (const nodeData of [10, 20, 30, 40, 50, 60]) {
			list.insertNode(nodeData)
		}

		const received = fn(list.head!)
		const expected = [20, 40, 60, 50, 30, 10] as const

		expect(received.data).toBe(expected[0])
		expect(received.next?.data).toBe(expected[1])
		expect(received.next?.next?.data).toBe(expected[2])
		expect(received.next?.next?.next?.data).toBe(expected[3])
		expect(received.next?.next?.next?.next?.data).toBe(expected[4])
		expect(received.next?.next?.next?.next?.next?.data).toBe(expected[5])
		expect(received.next?.next?.next?.next?.next?.next).toBeNil()
	})

	test("Test 02", () => {
		const list = new SinglyLinkedList()
		for (const nodeData of [42]) {
			list.insertNode(nodeData)
		}

		const received = fn(list.head!)
		const expected = [42] as const

		expect(received.data).toBe(expected[0])
		expect(received.next).toBeNil()
	})

	test("Test 03", () => {
		const list = new SinglyLinkedList()
		for (const nodeData of [1, 2]) {
			list.insertNode(nodeData)
		}

		const received = fn(list.head!)
		const expected = [2, 1] as const

		expect(received.data).toBe(expected[0])
		expect(received.next?.data).toBe(expected[1])
		expect(received.next?.next).toBeNil()
	})
})
