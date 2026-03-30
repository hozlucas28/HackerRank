import fn from "./solution.ts"
import { expect, test, describe } from "bun:test"

describe("Challenge 21: Forward references", () => {
	test("Test 01", () => {
		const received = fn("tactactic")
		const expected = true
		expect(received).toBe(expected)
	})
})
