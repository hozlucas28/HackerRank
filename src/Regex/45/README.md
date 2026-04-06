# Challenge 45 - Detect HTML attributes

Charlie's second assignment was given by the Professor as soon as he submitted the first one. Professor asked Charlie to create a list of all the attributes of every tag found in HTML pages.

```html
<p>This is a paragraph</p>
```

The above HTML string has p as its tag but no attributes.

```html
<a href="http://www.quackit.com/html/tutorial/html_links.cfm">Example Link</a>
```

This string has a as a tag and href as an attribute.

**Constraints:**

- Number of characters in the test fragments `<= 10000` characters.
- Characters will be restricted to ASCII.
- Fragments for the tests will be picked up from Wikipedia.
- Attributes are all lowercase alphabets.

### Solutions

- [TypeScript](solution.ts)
