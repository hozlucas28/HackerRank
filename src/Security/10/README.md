# Challenge 10 - PRNG sequence guessing

We often use Random number generators in our life. Java programming language has class `java.util.Random` for it. 64-bit parameter `seed` is maintained during the lifetime of an instance of this class. On creation it is initialized with random 48-bit value. Method `nextInt(n)` returns integer in range $`[0,n)`$. On every call of `nextInt(n)` seed is changed and then number consisting of bits from 17 to 47 of seed, inclusive, is returned:

```java
int nextInt(int n) {
	seed = (seed * 0x5DEECE66D + 0xB) & ((1L << 48) - 1);
	return (int) ((seed >>> 17) % n);
}
```

Note that in Java on overflow computations are done modulo $`2^{64}`$.

Operator `>>>` in Java is zero fill right shift, it fills leading bits with zeros, even if number is negative. The behavior would be the same, if the variable were unsigned. (It exists, because Java doesn't have unsigned integer types)

Given ten output values of `nextInt(1000)`, guess the next values to be output by the generator.

```golang
nextRndNumbers([]uint64{643, 953, 522, 277, 464, 366, 321, 409, 227, 702}) // [877, 633, 491, 596, 839, 875, 923, 461, 27, 826]
nextRndNumbers([]uint64{877, 654, 2, 715, 229, 255, 712, 267, 19, 832}) // [101, 966, 573, 339, 784, 718, 949, 934, 62, 368]
```

**Constraints:**

- $`1 \leq N \leq 10`$
- $`0 \leq a_i \leq 1000`$

### Solutions

- [Go (Golang)](solution.go)
