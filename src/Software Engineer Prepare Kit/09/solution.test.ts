import fn from "./solution.ts"
import { expect, test, describe } from "bun:test"

describe("Challenge 09: Min-tracking stack implementation", () => {
	test("Test 01", () => {
		const received = fn(["push 2", "push 0", "push 3", "push 0", "getMin", "pop", "getMin", "pop", "top", "getMin"])
		const expected = [0, 0, 0, 0]
		expect(received).toStrictEqual(expected)
	})

	test("Test 02", () => {
		const received = fn(["push 5", "getMin"])
		const expected = [5]
		expect(received).toStrictEqual(expected)
	})

	test("Test 03", () => {
		const received = fn(["push 0", "top"])
		const expected = [0]
		expect(received).toStrictEqual(expected)
	})
})
