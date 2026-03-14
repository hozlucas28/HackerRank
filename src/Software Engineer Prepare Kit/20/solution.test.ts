import fn from "./solution.ts"
import { expect, test, describe } from "bun:test"

describe("Challenge 20: Ways to fill slots with single or double coverage", () => {
	test("Test 01", () => {
		const received = fn(3)
		const expected = "3"
		expect(received).toBe(expected)
	})

	test("Test 02", () => {
		const received = fn(5)
		const expected = "8"
		expect(received).toBe(expected)
	})

	test("Test 03", () => {
		const received = fn(2)
		const expected = "2"
		expect(received).toBe(expected)
	})

	test("Test 04", () => {
		const received = fn(3)
		const expected = "3"
		expect(received).toBe(expected)
	})
})
