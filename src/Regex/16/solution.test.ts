import fn from "./solution.ts"
import { expect, test, describe } from "bun:test"

describe("Challenge 16: Capturing & non-capturing groups", () => {
	test("Test 01", () => {
		const received = fn("okokok! cya")
		const expected = true
		expect(received).toBe(expected)
	})
})
