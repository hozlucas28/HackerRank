import fn from "./solution.ts"
import { expect, test, describe } from "bun:test"

describe("Challenge 28: Alien username", () => {
	test("Test 01", () => {
		const received = fn(["_0898989811abced_", "_abce", "_09090909abcD0"])
		const expected = ["VALID", "INVALID", "INVALID"]
		expect(received).toStrictEqual(expected)
	})
})
