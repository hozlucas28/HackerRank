# Challenge 44 - Split the phone numbers

There is a list of phone numbers which needs the attention of a text processing expert. As an expert in regular expressions, you are being roped in for the task. A phone number directory can reveal a lot such as country codes and local area codes. The only constraint is that one should know how to process it correctly.

A Phone number is of the following format

```plaintext
[Country code]-[Local Area Code]-[Number]
```

There might either be a '-' ( ASCII value 45), or a ' ' ( space, ASCII value 32) between the segments.

Where the country and local area codes can have 1-3 numerals each and the number section can have 4-10 numerals each.

And so, if we tried to apply the a regular expression with groups on this phone number: 1-425-9854706

We'd get:

- Group 1 = 1
- Group 2 = 425
- Group 3 = 9854706

You will be provided a list of N phone numbers which conform to the pattern described above. Your task is to split it into the country code, local area code and the number.

**Constraints:**

- `1 <= N <= 20`
- There might either be a hyphen, or a space between the segments
- The country and local area codes can have 1-3 numerals each and the number section can have 4-10 numerals each.

### Solutions

- [TypeScript](solution.ts)
