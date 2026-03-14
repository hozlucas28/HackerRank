import fn from "./solution.ts"
import { expect, test, describe } from "bun:test"

describe("Challenge 18: Place N cameras without conflict on blocked grid", () => {
	test("Test 01", () => {
		const received = fn(4, [
			[0, 0, 0, 0],
			[0, 0, 0, 0],
			[0, 0, 0, 0],
			[0, 0, 0, 0]
		])
		const expected = true
		expect(received).toBe(expected)
	})

	test("Test 02", () => {
		const received = fn(4, [
			[0, 1, 0, 0],
			[0, 0, 0, 1],
			[1, 0, 0, 0],
			[0, 0, 1, 0]
		])
		const expected = true
		expect(received).toBe(expected)
	})

	test("Test 03", () => {
		const received = fn(5, [
			[1, 0, 0, 1],
			[0, 1, 1, 0],
			[1, 0, 1, 0]
		])
		const expected = true
		expect(received).toBe(expected)
	})

	test("Test 04", () => {
		const received = fn(1, [[0]])
		const expected = true
		expect(received).toBe(expected)
	})

	test("Test 05", () => {
		const received = fn(2, [
			[0, 1],
			[1, 0]
		])
		const expected = false
		expect(received).toBe(expected)
	})
})
