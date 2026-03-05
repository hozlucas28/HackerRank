import fn from "./solution.ts"
import { expect, test, describe } from "bun:test"

describe("Challenge 03: Check palindrome by filtering non-letters", () => {
	test("Test 01", () => {
		const received = fn("A1b2B!a")
		const expected = true
		expect(received).toBe(expected)
	})

	test("Test 02", () => {
		const received = fn("Z")
		const expected = true
		expect(received).toBe(expected)
	})

	test("Test 03", () => {
		const received = fn("abc123cba")
		const expected = true
		expect(received).toBe(expected)
	})
})
