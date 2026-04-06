# Challenge 26 - Detect HTML links

Charlie has been given an assignment by his Professor to strip the links and the text name from the HTML pages.
A html link is of the form,

```html
<a href="http://www.hackerrank.com">HackerRank</a>
```

Where `a` is the tag and `href` is an attribute which holds the link charlie is interested in. The text name is `HackerRank`.

Charlie notices that the text name can sometimes be hidden within multiple tags

```html
<a href="http://www.hackerrank.com">
	<h1><b>HackerRank</b></h1>
</a>
```

Here, the text name is hidden inside the tags `h1` and `b`.

Help Charlie in listing all the links and the text name of the links.

**Constraints:**

- `N < 100`
- Number of characters in the test fragments `<= 10000` characters.
- Characters will be restricted to ASCII. Fragments for the tests will be picked up from Wikipedia. Also, some tests might not have text or names on the links.

### Solutions

- [TypeScript](solution.ts)
