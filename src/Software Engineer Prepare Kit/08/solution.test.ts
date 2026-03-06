import fn from "./solution.ts"
import { expect, test, describe } from "bun:test"

describe("Challenge 08: Validate properly nested brackets", () => {
	test("Test 01", () => {
		const received = fn("if (a[0] > b[1]) { doSomething(); }")
		const expected = true
		expect(received).toBe(expected)
	})

	test("Test 02", () => {
		const received = fn("int x = 42; // no brackets here")
		const expected = true
		expect(received).toBe(expected)
	})

	test("Test 03", () => {
		const received = fn("() {} []")
		const expected = true
		expect(received).toBe(expected)
	})
})
