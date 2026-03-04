import fn from "./solution.ts"
import { expect, test, describe } from "bun:test"

describe("Challenge 02: Find the smallest missing positive integer", () => {
	test("Test 01", () => {
		const received = fn([])
		const expected = 1
		expect(received).toBe(expected)
	})

	test("Test 02", () => {
		const received = fn([1])
		const expected = 2
		expect(received).toBe(expected)
	})

	test("Test 03", () => {
		const received = fn([3, 4, -1, 1])
		const expected = 2
		expect(received).toBe(expected)
	})
})
