# Challenge 30 - IP address validation

You will be provided with N lines of what are possibly IP addresses. You need to detect if the text contained in each of the lines represents an (a)IPv4 address (b)IPv6 address or (c)None of these.

[IPv4](https://en.wikipedia.org/wiki/IPv4) was the first publicly used Internet Protocol which used 4 byte addresses which permitted for $`2^{32}`$ addresses. The typical format of an IPv4 address is A.B.C.D where A, B, C and D are Integers lying between 0 and 255 (both inclusive).

[IPv6](https://en.wikipedia.org/wiki/IPv6), with 128 bits was developed to permit the expansion of the address space. To quote from the linked article: The 128 bits of an IPv6 address are represented in 8 groups of 16 bits each. Each group is written as 4 hexadecimal digits and the groups are separated by colons (:). The address 2001:0db8:0000:0000:0000:ff00:0042:8329 is an example of this representation. Consecutive sections of zeros will be left as they are.

An IPv6 value such as "...:0:..." or "...:5:..." is address-wise identical to "...:0000:..." or "...:0005:....". Leading zeros may be omitted in writing the address.

### Solutions

- [TypeScript](solution.ts)
