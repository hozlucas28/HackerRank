import fn from "./solution.ts"
import { expect, test, describe } from "bun:test"

describe("Challenge 08: Excluding specific characters", () => {
	test("Test 01", () => {
		const received = fn("think?")
		const expected = true
		expect(received).toBe(expected)
	})
})
