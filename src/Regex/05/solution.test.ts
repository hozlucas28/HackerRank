import fn from "./solution.ts"
import { expect, test, describe } from "bun:test"

describe("Challenge 05: Matching word & non-word character", () => {
	test("Test 01", () => {
		const received = fn("www.hackerrank.com")
		const expected = true
		expect(received).toBe(expected)
	})
})
