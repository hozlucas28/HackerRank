import fn from "./solution.ts"
import { expect, test, describe } from "bun:test"

describe("Challenge 25: Detect cycle in module dependency graph", () => {
	test("Test 01", () => {
		const received = fn(4, [
			[1, 0],
			[2, 1],
			[3, 2]
		])

		const expected = false

		expect(received).toBe(expected)
	})

	test("Test 02", () => {
		const received = fn(4, [
			[1, 0],
			[2, 1],
			[0, 2]
		])

		const expected = true

		expect(received).toBe(expected)
	})

	test("Test 03", () => {
		const received = fn(1, [])
		const expected = false
		expect(received).toBe(expected)
	})

	test("Test 04", () => {
		const received = fn(1, [[0, 0]])
		const expected = true
		expect(received).toBe(expected)
	})
})
