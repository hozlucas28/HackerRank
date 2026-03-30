import fn from "./solution.ts"
import { expect, test, describe } from "bun:test"

describe("Challenge 06: Matching start & end", () => {
	test("Test 01", () => {
		const received = fn("0qwer.")
		const expected = true
		expect(received).toBe(expected)
	})
})
