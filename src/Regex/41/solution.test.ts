import fn from "./solution.ts"
import { expect, test, describe } from "bun:test"

describe("Challenge 41: Saying hi", () => {
	test("Test 01", () => {
		const received = fn([
			"Hi Alex how are you doing",
			"hI dave how are you doing",
			"Good by Alex",
			"hidden agenda",
			"Alex greeted Martha by saying Hi Martha"
		])
		const expected = ["Hi Alex how are you doing"]
		expect(received).toStrictEqual(expected)
	})
})
