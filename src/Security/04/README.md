# Challenge 04 - Function inverses

Consider a bijective function $`f: X \rightarrow Y`$.

Define another function $`g: Y \rightarrow X`$ so that for $`x \in X`$ and $`y \in Y`$ if $`f(x)=y`$ then $`g(y)=x`$.

Now, the function $`g`$ is said to be the inverse function of $`f`$ and is denoted as $`g=f^{-1}`$.

In this task, you'll be given an integer $`n`$ and a bijective function $`f: X \rightarrow X`$ where $`X=\{1,2,3,...,n\}`$.

Output the inverse of $`f`$.

```golang
inverse(3, []uint8{1, 2, 3}) // [1, 2, 3]
inverse(3, []uint8{2, 3, 1}) // [3, 1, 2]
```

**Constraints:**

- $`1 \leq n \leq 20`$

### Solutions

- [Go (Golang)](solution.go)
