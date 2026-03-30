import fn from "./solution.ts"
import { expect, test, describe } from "bun:test"

describe("Challenge 32: HackerRank language", () => {
	test("Test 01", () => {
		const received = fn(["11011 C", "11022 CPP", "11044 X"])
		const expected = ["VALID", "VALID", "INVALID"]
		expect(received).toStrictEqual(expected)
	})
})
