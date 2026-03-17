# Challenge 06 - Involution

Consider a function $f: X \rightarrow X$ where $X$ is any set, and $f$ is a bijection.

Now, if $f=f^{-1}$ then $f$ is called an involution. In other words, a function $f$ is called an involution if $f(f(x))=x$

In this task you're given a permutation $f:\{1,2,3,...,n\} \rightarrow \{1,2,3,...,n\}$.

Determine whether $f$ is an involution or not.

```golang
isInvolution([]uint8{2, 1}) // true
```

**Constraints:**

- $1 \leq n \leq 20$

### Solutions

- [Go (Golang)](solution.go)
