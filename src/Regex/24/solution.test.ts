import fn from "./solution.ts"
import { expect, test, describe } from "bun:test"

describe("Challenge 24: Positive lookbehind", () => {
	test("Test 01", () => {
		const received = fn("123Go!")
		const expected = 1
		expect(received).toBe(expected)
	})
})
