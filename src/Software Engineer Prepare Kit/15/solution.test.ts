import fn from "./solution.ts"
import { expect, test, describe } from "bun:test"

describe("Challenge 15: Two sum", () => {
	test("Test 01", () => {
		const received = fn([2, 7, 11, 15], 9)
		const expected = [0, 1]
		expect(received).toStrictEqual(expected)
	})

	test("Test 02", () => {
		const received = fn([1, 2, 3, 4], 8)
		const expected = [-1, -1]
		expect(received).toStrictEqual(expected)
	})

	test("Test 03", () => {
		const received = fn([], 10)
		const expected = [-1, -1]
		expect(received).toStrictEqual(expected)
	})

	test("Test 04", () => {
		const received = fn([5], 5)
		const expected = [-1, -1]
		expect(received).toStrictEqual(expected)
	})
})
