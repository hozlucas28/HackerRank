import fn from "./solution.ts"
import { expect, test, describe } from "bun:test"

describe("Challenge 23: Compare BSTs for equal values but different structure", () => {
	test("Test 01", () => {
		const received = fn([4, 2, 5, 1, 3, 100001, 100001], [3, 1, 5, 100001, 2, 4, 100001])
		const expected = false
		expect(received).toBe(expected)
	})

	test("Test 02", () => {
		const received = fn([1], [1])
		const expected = false
		expect(received).toBe(expected)
	})

	test("Test 03", () => {
		const received = fn([2, 1], [1, 100001, 2])
		const expected = true
		expect(received).toBe(expected)
	})
})
