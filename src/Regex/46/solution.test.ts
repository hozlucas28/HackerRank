import fn from "./solution.ts"
import { expect, test, describe } from "bun:test"

describe("Challenge 46: The British and American style of spelling", () => {
	test("Test 01", () => {
		const received = fn(
			`hackerrank ui is easy to familiarise with
to familiarize oneself with ui of hackerrank is easy`,
			["familiarize"]
		)

		const expected = [2]

		expect(received).toStrictEqual(expected)
	})
})
