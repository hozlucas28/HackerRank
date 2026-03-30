import fn from "./solution.ts"
import { expect, test, describe } from "bun:test"

describe("Challenge 30: Find HackerRank", () => {
	test("Test 01", () => {
		const received = fn([
			"i love hackerrank",
			"hackerrank is an awesome place for programmers",
			"hackerrank",
			"i think hackerrank is a great place to hangout"
		])
		const expected = ["2", "1", "0", "-1"]
		expect(received).toStrictEqual(expected)
	})
})
