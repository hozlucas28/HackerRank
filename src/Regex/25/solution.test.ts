import fn from "./solution.ts"
import { expect, test, describe } from "bun:test"

describe("Challenge 25: Negative lookbehind", () => {
	test("Test 01", () => {
		const received = fn("1o1s")
		const expected = 3
		expect(received).toBe(expected)
	})
})
