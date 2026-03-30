import fn from "./solution.ts"
import { expect, test, describe } from "bun:test"

describe("Challenge 12: Matching zero or more repetitions", () => {
	test("Test 01", () => {
		const received = fn("14")
		const expected = true
		expect(received).toBe(expected)
	})
})
