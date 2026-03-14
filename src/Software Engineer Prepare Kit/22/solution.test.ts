import fn from "./solution.ts"
import { expect, test, describe } from "bun:test"

describe("Challenge 22: Height of binary search tree", () => {
	test("Test 01", () => {
		const received = fn([4, 2, 6, 1, 3, 5, 7], [1, 3, 5, -1, -1, -1, -1], [2, 4, 6, -1, -1, -1, -1])
		const expected = 3
		expect(received).toBe(expected)
	})

	test("Test 02", () => {
		const received = fn([10], [-1], [-1])
		const expected = 1
		expect(received).toBe(expected)
	})

	test("Test 03", () => {
		const received = fn([5, 3], [1, -1], [-1, -1])
		const expected = 2
		expect(received).toBe(expected)
	})
})
