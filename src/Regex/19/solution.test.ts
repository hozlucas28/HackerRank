import fn from "./solution.ts"
import { expect, test, describe } from "bun:test"

describe("Challenge 19: Backreferences to failed groups", () => {
	test("Test 01", () => {
		const received = fn("12-34-56-78")
		const expected = true
		expect(received).toBe(expected)
	})
})
