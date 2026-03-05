import fn from "./solution.ts"
import { expect, test, describe } from "bun:test"

describe("Challenge 04: Check for non-identical string rotation", () => {
	test("Test 01", () => {
		const received = fn("abcde", "cdeab")
		const expected = true
		expect(received).toBe(expected)
	})

	test("Test 02", () => {
		const received = fn("a", "a")
		const expected = false
		expect(received).toBe(expected)
	})

	test("Test 03", () => {
		const received = fn("a", "b")
		const expected = false
		expect(received).toBe(expected)
	})
})
