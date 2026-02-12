import fn from "./solution.ts"
import { expect, test, describe } from "bun:test"

describe("Challenge 01: Count elements greater than previous average", () => {
	test("Test 01", () => {
		const received = fn([])
		const expected = 0
		expect(received).toBe(expected)
	})

	test("Test 02", () => {
		const received = fn([1, 100])
		const expected = 1
		expect(received).toBe(expected)
	})

	test("Test 03", () => {
		const received = fn([100, 200, 150, 300])
		const expected = 2
		expect(received).toBe(expected)
	})
})
