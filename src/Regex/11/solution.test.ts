import fn from "./solution.ts"
import { expect, test, describe } from "bun:test"

describe("Challenge 11: Matching {x, y} repetitions", () => {
	test("Test 01", () => {
		const received = fn("3threeormorealphabets.")
		const expected = true
		expect(received).toBe(expected)
	})
})
