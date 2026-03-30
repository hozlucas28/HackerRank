import fn from "./solution.ts"
import { expect, test, describe } from "bun:test"

describe("Challenge 17: Alternative matching", () => {
	test("Test 01", () => {
		const received = fn("Mr.DOSHI")
		const expected = true
		expect(received).toBe(expected)
	})
})
