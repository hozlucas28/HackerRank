import fn from "./solution.ts"
import { expect, test, describe } from "bun:test"

describe("Challenge 16: Check valid anagram", () => {
	test("Test 01", () => {
		const received = fn("listen", "silent")
		const expected = 1
		expect(received).toBe(expected)
	})

	test("Test 02", () => {
		const received = fn("hello", "bellow")
		const expected = 0
		expect(received).toBe(expected)
	})

	test("Test 3", () => {
		const received = fn("a", "a") // 1
		const expected = 1
		expect(received).toBe(expected)
	})

	test("Test 04", () => {
		const received = fn("ab", "ba") // 1
		const expected = 1
		expect(received).toBe(expected)
	})
})
