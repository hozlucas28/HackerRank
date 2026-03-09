import fn, { SinglyLinkedListNode } from "./solution.ts"
import { SinglyLinkedList } from "./solution.ts"
import { expect, test, describe } from "bun:test"

describe("Challenge 10: One-pass removal of k-th node from end", () => {
	test("Test 01", () => {
		const list = new SinglyLinkedList()

		const nodes = [5, 6, 7, 8] as const
		for (const node of nodes) list.insertNode(node)

		const received = fn(list.head!, 3)
		const expected = [6, 7, 8] as const

		expect(received.data).toBe(expected[0])
		expect(received.next?.data!).toBe(expected[1])
		expect(received.next?.next?.data!).toBe(expected[2])
		expect(received.next?.next?.next).toBeNil()
	})

	test("Test 02", () => {
		const list = new SinglyLinkedList()

		const nodes = [5] as const
		for (const node of nodes) list.insertNode(node)

		const received = fn(list.head!, 1)
		const expected = [5] as const

		expect(received.data).toBe(expected[0])
		expect(received.next).toBeNil()
	})

	test("Test 03", () => {
		const list = new SinglyLinkedList()

		const nodes = [1, 2] as const
		for (const node of nodes) list.insertNode(node)

		const received = fn(list.head!, 0)
		const expected = [1] as const

		expect(received.data).toBe(expected[0])
		expect(received.next).toBeNil()
	})

	test("Test 04", () => {
		const list = new SinglyLinkedList()

		const nodes = [1, 2, 4, 8] as const
		for (const node of nodes) list.insertNode(node)

		const received = fn(list.head!, 1)
		const expected = [1, 2, 8] as const

		expect(received.data).toBe(expected[0])
		expect(received.next?.data!).toBe(expected[1])
		expect(received.next?.next?.data!).toBe(expected[2])
		expect(received.next?.next?.next).toBeNil()
	})
})
