import fn from "./solution.ts"
import { expect, test, describe } from "bun:test"

describe("Challenge 11: Count number pairs", () => {
	test("Test 01", () => {
		const received = fn([1, 2, 3, 4, 5], 7)
		const expected = 8
		expect(received).toBe(expected)
	})

	test("Test 02", () => {
		const received = fn([], 100)
		const expected = 0
		expect(received).toBe(expected)
	})

	test("Test 03", () => {
		const received = fn([5], 5)
		const expected = 0
		expect(received).toBe(expected)
	})
})
