import fn from "./solution.ts"
import { expect, test, describe } from "bun:test"

describe("Challenge 38: Utopian identification number", () => {
	test("Test 01", () => {
		const received = fn(["abc012333ABCDEEEE", "0123AB"])
		const expected = ["VALID", "INVALID"]
		expect(received).toStrictEqual(expected)
	})
})
