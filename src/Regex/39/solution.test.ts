import fn from "./solution.ts"
import { expect, test, describe } from "bun:test"

describe("Challenge 39: Valid PAN format", () => {
	test("Test 01", () => {
		const received = fn(["ABCDS1234Y", "ABAB12345Y", "avCDS1234Y"])
		const expected = ["YES", "NO", "NO"]
		expect(received).toStrictEqual(expected)
	})
})
