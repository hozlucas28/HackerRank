import fn from "./solution.ts"
import { expect, test, describe } from "bun:test"

describe("Challenge 07: Maximum number of non-overlapping intervals", () => {
	test("Test 01", () => {
		const received = fn([
			[1, 2],
			[2, 3],
			[3, 4],
			[1, 3]
		])

		const expected = 3
		expect(received).toBe(expected)
	})

	test("Test 02", () => {
		const received = fn([
			[0, 5],
			[0, 1],
			[1, 2],
			[2, 3],
			[3, 5],
			[4, 6]
		])

		const expected = 4
		expect(received).toBe(expected)
	})

	test("Test 03", () => {
		const received = fn([
			[1, 2],
			[3, 4],
			[0, 6],
			[5, 7],
			[8, 9],
			[5, 9]
		])

		const expected = 4
		expect(received).toBe(expected)
	})

	test("Test 04", () => {
		const received = fn([[5, 10]])

		const expected = 1
		expect(received).toBe(expected)
	})

	test("Test 05", () => {
		const received = fn([
			[1, 2],
			[2, 3],
			[3, 4]
		])

		const expected = 3
		expect(received).toBe(expected)
	})
})
