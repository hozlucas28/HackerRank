import fn from "./solution.ts"
import { expect, test, describe } from "bun:test"

describe("Challenge 19: Custom Fibonacci sequence", () => {
	test("Test 01", () => {
		const received = fn(3) as unknown as bigint
		const expected = 5n
		expect(received).toBe(expected)
	})

	test("Test 02", () => {
		const received = fn(10) as unknown as bigint
		const expected = 144n
		expect(received).toBe(expected)
	})

	test("Test 03", () => {
		const received = fn(0) as unknown as bigint
		const expected = 1n
		expect(received).toBe(expected)
	})

	test("Test 04", () => {
		const received = fn(1) as unknown as bigint
		const expected = 2n
		expect(received).toBe(expected)
	})
})
