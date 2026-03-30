import fn from "./solution.ts"
import { expect, test, describe } from "bun:test"

describe("Challenge 22: Positive lookahead", () => {
	test("Test 01", () => {
		const received = fn("gooooo!")
		const expected = 3
		expect(received).toBe(expected)
	})
})
