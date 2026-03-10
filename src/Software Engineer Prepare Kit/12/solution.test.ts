import fn, { SinglyLinkedList } from "./solution.ts"
import { expect, test, describe } from "bun:test"

describe("Challenge 12: Remove consecutive duplicates from sorted linked list", () => {
	test("Test 01", () => {
		const list = new SinglyLinkedList()
		for (const nodeData of [1, 2, 2, 2, 3, 4, 4, 5]) {
			list.insertNode(nodeData)
		}

		const received = fn(list.head!)
		const expected = [1, 2, 3, 4, 5] as const

		expect(received.data).toBe(expected[0])
		expect(received.next?.data).toBe(expected[1])
		expect(received.next?.next?.data).toBe(expected[2])
		expect(received.next?.next?.next?.data).toBe(expected[3])
		expect(received.next?.next?.next?.next?.data).toBe(expected[4])
		expect(received.next?.next?.next?.next?.next).toBeNil()
	})

	test("Test 02", () => {
		const list = new SinglyLinkedList()
		const received = fn(list.head!)
		expect(received).toBeNil()
	})

	test("Test 03", () => {
		const list = new SinglyLinkedList()
		for (const nodeData of [1]) {
			list.insertNode(nodeData)
		}

		const received = fn(list.head!)
		const expected = [1] as const

		expect(received.data).toBe(expected[0])
		expect(received.next).toBeNil()
	})
})
