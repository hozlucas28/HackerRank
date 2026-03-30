import fn from "./solution.ts"
import { expect, test, describe } from "bun:test"

describe("Challenge 15: Matching word boundaries", () => {
	test("Test 01", () => {
		const received = fn("Found any match?")
		const expected = true
		expect(received).toBe(expected)
	})
})
