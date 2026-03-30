import fn from "./solution.ts"
import { expect, test, describe } from "bun:test"

describe("Challenge 14: Matching ending items", () => {
	test("Test 01", () => {
		const received = fn("Kites")
		const expected = true
		expect(received).toBe(expected)
	})
})
