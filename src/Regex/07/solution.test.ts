import fn from "./solution.ts"
import { expect, test, describe } from "bun:test"

describe("Challenge 07: Matching specific characters", () => {
	test("Test 01", () => {
		const received = fn("1203x.")
		const expected = true
		expect(received).toBe(expected)
	})
})
