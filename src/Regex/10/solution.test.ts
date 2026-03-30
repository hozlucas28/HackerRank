import fn from "./solution.ts"
import { expect, test, describe } from "bun:test"

describe("Challenge 10: Matching {x} repetitions", () => {
	test("Test 01", () => {
		const received = fn("2222222222aaaaaaaaaa2222222222aaaaaaaaaa13 57")
		const expected = true
		expect(received).toBe(expected)
	})
})
