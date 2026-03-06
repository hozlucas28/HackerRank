import fn from "./solution.ts"
import { expect, test, describe } from "bun:test"

describe("Challenge 05: Target index search", () => {
	test("Test 01", () => {
		const received = fn([2, 4, 6, 8, 10, 12, 14, 16], 16)
		const expected = 7
		expect(received).toBe(expected)
	})

	test("Test 02", () => {
		const received = fn([], 5)
		const expected = -1
		expect(received).toBe(expected)
	})

	test("Test 03", () => {
		const received = fn([10], 10)
		const expected = 0
		expect(received).toBe(expected)
	})
})
