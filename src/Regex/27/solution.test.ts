import fn from "./solution.ts"
import { expect, test, describe } from "bun:test"

describe("Challenge 27: Detect HTML tags", () => {
	test("Test 01", () => {
		const received = fn([
			`<p><a href="http://www.quackit.com/html/tutorial/html_links.cfm">Example Link</a></p>`,
			`<div class="more-info"><a href="http://www.quackit.com/html/examples/html_links_examples.cfm">More Link Examples...</a></div>`
		])
		const expected = "a;div;p"
		expect(received).toBe(expected)
	})
})
