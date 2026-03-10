import fn from "./solution.ts"
import { expect, test, describe } from "bun:test"

describe("Challenge 14: Remove elements within K distance", () => {
	test("Test 01", () => {
		const received = fn([1, 2, 3, 8, 10], 3)
		const expected = 2
		expect(received).toBe(expected)
	})

	test("Test 02", () => {
		const received = fn([], 10)
		const expected = 0
		expect(received).toBe(expected)
	})

	test("Test 03", () => {
		const received = fn([5], 0)
		const expected = 1
		expect(received).toBe(expected)
	})
})
