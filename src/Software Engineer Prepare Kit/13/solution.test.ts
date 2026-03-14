import fn from "./solution.ts"
import { expect, test, describe } from "bun:test"

describe("Challenge 13: Generate valid angle bracket sequences", () => {
	test("Test 01", () => {
		const received = fn(1)
		const expected = ["<>"]
		expect(received).toStrictEqual(expected)
	})

	test("Test 02", () => {
		const received = fn(2)
		const expected = ["<<>>", "<><>"]
		expect(received).toStrictEqual(expected)
	})

	test("Test 03", () => {
		const received = fn(3)
		const expected = ["<<<>>>", "<<><>>", "<<>><>", "<><<>>", "<><><>"]
		expect(received).toStrictEqual(expected)
	})
})
