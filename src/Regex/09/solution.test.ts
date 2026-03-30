import fn from "./solution.ts"
import { expect, test, describe } from "bun:test"

describe("Challenge 09: Matching character ranges", () => {
	test("Test 01", () => {
		const received = fn("h4CkR")
		const expected = true
		expect(received).toBe(expected)
	})
})
