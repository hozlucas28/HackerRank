import fn from "./solution.ts"
import { expect, test, describe } from "bun:test"

describe("Challenge 27: Find a sub-word", () => {
	test("Test <TEST NUMBER>", () => {
		const received = fn("existing pessimist optimist this is", ["is"])
		const expected = [3]
		expect(received).toStrictEqual(expected)
	})
})
