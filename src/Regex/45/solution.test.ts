import fn from "./solution.ts"
import { expect, test, describe } from "bun:test"

describe("Challenge 45: Detect HTML attributes", () => {
	test("Test 01", () => {
		const received = fn(`<div class="portal" role="navigation" id='p-navigation'>
<h3>Navigation</h3>
<div class="body">
<ul>
<li id="n-mainpage-description"><a href="/wiki/Main_Page" title="Visit the main page [z]" accesskey="z">Main page</a></li>
<li id="n-contents"><a href="/wiki/Portal:Contents" title="Guides to browsing Wikipedia">Contents</a></li>
<li id="n-featuredcontent"><a href="/wiki/Portal:Featured_content" title="Featured content  the best of Wikipedia">Featured content</a></li>
<li id="n-currentevents"><a href="/wiki/Portal:Current_events" title="Find background information on current events">Current events</a></li>
<li id="n-randompage"><a href="/wiki/Special:Random" title="Load a random article [x]" accesskey="x">Random article</a></li>
<li id="n-sitesupport"><a href="//donate.wikimedia.org/wiki/Special:FundraiserRedirector?utm_source=donate&amp;utm_medium=sidebar&amp;utm_campaign=C13_en.wikipedia.org&amp;uselang=en" title="Support us">Donate to Wikipedia</a></li>
</ul>
</div>
</div>`)

		const expected = ["a:accesskey,href,title", "div:class,id,role", "h3:", "li:id", "ul:"]

		expect(received).toStrictEqual(expected)
	})

	test("Test 02", () => {
		const received = fn(`<p><a href="http://www.quackit.com/html/tutorial/html_links.cfm">Example Link</a></p>
<div class="more-info"><a href="http://www.quackit.com/html/examples/html_links_examples.cfm">More Link Examples...</a></div>`)

		const expected = ["a:href", "div:class", "p:"]

		expect(received).toStrictEqual(expected)
	})
})
