import fn from "./solution.ts"
import { expect, test, describe } from "bun:test"

describe("Challenge 01: Matching specific string", () => {
	test("Test 01", () => {
		const received = fn(
			"The hackerrank team is on a mission to flatten the world by restructuring the DNA of every company on the planet. We rank programmers based on their coding skills, helping companies source great programmers and reduce the time to hire. As a result, we are revolutionizing the way companies discover and evaluate talented engineers. The hackerrank platform is the destination for the best engineers to hone their skills and companies to find top engineers."
		)
		const expected = 2
		expect(received).toBe(expected)
	})
})
