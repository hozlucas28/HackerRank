import fn from "./solution.ts"
import { expect, test, describe } from "bun:test"

describe("Challenge 13: Matching one or more repetitions", () => {
	test("Test 01", () => {
		const received = fn("1Qa")
		const expected = true
		expect(received).toBe(expected)
	})
})
