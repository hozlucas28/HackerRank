# Challenge 21 - Count connected components in network

Given `n` computers labeled `0` to `n-1` and a list of bidirectional communication links, find the number of connected components.

```typescript
countIsolatedCommunicationGroups(
	[
		[0, 1],
		[2, 3]
	],
	4
)
// There are 4 computers: 0, 1, 2, and 3.
// Links connect 0-1 and 2-3. Computers 0 and 1 form one group
// since they are directly connectable. Similarly, 2 and 3 form
// another group. There are no connections between the two groups,
// so the number of isolated communication groups is 2.

countIsolatedCommunicationGroups([[0, 1]], 2) // 1
countIsolatedCommunicationGroups(
	[
		[0, 1],
		[1, 2],
		[0, 2]
	],
	3
) // 1
```

**Constraints:**

- `1 <= n <= 1000`
- `0 <= links.length <= n * (n - 1) / 2`
- `links[i].length == 2` for each valid `i`
- `0 <= links[i][0] < n`
- `0 <= links[i][1] < n`
- `links[i][0] != links[i][1]` for each valid `i` (No self-loops)
- Each pair `[a, b]` is bidirectional, i.e., `[a, b]` and `[b, a]` are considered the same link
- No duplicate links (i.e., no repeated `[a, b]` or `[b, a]`) in links
- All values in each link are integers

### Solutions

- [TypeScript](solution.ts)
- [Go (Golang)](solution.go)
