import fn from "./solution.ts"
import { expect, test, describe } from "bun:test"

describe("Challenge 04: Matching whitespace & non-whitespace character", () => {
	test("Test 01", () => {
		const received = fn("12 11 15")
		const expected = true
		expect(received).toBe(expected)
	})
})
