import fn from "./solution.ts"
import { expect, test, describe } from "bun:test"

describe("Challenge 17: Lexicographical letter combinations of phone digits", () => {
	test("Test 01", () => {
		const received = fn("23")
		const expected = ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]
		expect(received).toStrictEqual(expected)
	})

	test("Test 02", () => {
		const received = fn("203")
		const expected = ["a0d", "a0e", "a0f", "b0d", "b0e", "b0f", "c0d", "c0e", "c0f"]
		expect(received).toStrictEqual(expected)
	})
})
