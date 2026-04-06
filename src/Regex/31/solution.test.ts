import fn from "./solution.ts"
import { expect, test, describe } from "bun:test"

describe("Challenge 31: Find a word", () => {
	test("Test 01", () => {
		const received = fn("foo bar (foo) bar foo-bar foo_bar foo'bar bar-foo bar, foo.", ["foo"])
		const expected = [6]
		expect(received).toStrictEqual(expected)
	})
})
