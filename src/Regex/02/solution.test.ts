import fn from "./solution.ts"
import { expect, test, describe } from "bun:test"

describe("Challenge 02: Matching anything but a newline", () => {
	test("Test 01", () => {
		const received = fn("123.456.abc.def")
		const expected = true
		expect(received).toBe(expected)
	})

	test("Test 02", () => {
		const received = fn("1123.456.abc.def")
		const expected = false
		expect(received).toBe(expected)
	})
})
