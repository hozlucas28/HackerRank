import fn from "./solution.ts"
import { expect, test, describe } from "bun:test"

describe("Challenge 03: Matching digits & non-digit characters", () => {
	test("Test 01", () => {
		const received = fn("06-11-2015")
		const expected = true
		expect(received).toBe(expected)
	})
})
