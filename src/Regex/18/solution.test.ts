import fn from "./solution.ts"
import { expect, test, describe } from "bun:test"

describe("Challenge 18: Matching same text again & again", () => {
	test("Test 01", () => {
		const received = fn("ab #1?AZa$ab #1?AZa$")
		const expected = true
		expect(received).toBe(expected)
	})
})
