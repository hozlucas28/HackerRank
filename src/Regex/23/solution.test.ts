import fn from "./solution.ts"
import { expect, test, describe } from "bun:test"

describe("Challenge 23: Negative lookahead", () => {
	test("Test 01", () => {
		const received = fn("gooooo")
		const expected = 2
		expect(received).toBe(expected)
	})
})
