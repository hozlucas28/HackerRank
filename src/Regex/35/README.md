# Challenge 35 - Detecting valid latitude and longitude pairs

Given a line of text which possibly contains the latitude and longitude of a point, Can you use regular expressions to identify the latitude and longitude referred to (if any)?

**Constraints:**

- `1 <= N <= 100`
- The latitude and longitude, if present will always appear in the form of `(X, Y)` where `X` and `Y` are decimal numbers.
- For a valid `(latitude, longitude)` pair:
- `-90 <= X <= +90` and `-180 <= Y <= 180`.
- They will not contain any symbols for degrees or radians or `N`/`S`/`E`/`W`. There may or may not be a `+`/`-` sign preceding `X` or `Y`.
- There will be a space between `Y` and the comma before it.
- There will be no space between `X` and the preceding left-bracket, or between `Y` and the following right-bracket.
- There will be no unnecessary zeros (`0`) before `X` or `Y`.

### Solutions

- [TypeScript](solution.ts)
