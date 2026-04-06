import fn from "./solution.ts"
import { expect, test, describe } from "bun:test"

describe("Challenge 36: HackerRank tweets", () => {
	test("Test 01", () => {
		const received = fn(`I love #hackerrank
I just scored 27 points in the Picking Cards challenge on #HackerRank
I just signed up for summer cup @hackerrank
interesting talk by hari, co-founder of hackerrank`)
		const expected = 4

		expect(received).toBe(expected)
	})
})
