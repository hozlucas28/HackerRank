# Challenge 05 - Permutations

Consider a function $f:X \rightarrow X$ where $X$ is any set.
If $f$ is a bijection, then $f$ is a permutation function of $X$. There is nothing special about the set $X$. It can be replaced by the set $\{1,2,3,...,n\}$ where $n=|X|$.

Consider a permutation $f$ given by $(2,3,1)$. This means that $f(1)=2$, $f(2)=3$ and $f(3)=1$.

In this task, you're given a permutation $f:\{1,2,3,...,n\} \rightarrow \{1,2,3,...,n\}$.

Output $f(f(x))$ for all $x \in \{1,2,3,...,n\}$.

```golang
permute(3, []uint8{2, 3, 1}) // [3, 1, 2]
```

**Constraints:**

- $1 \leq n \leq 20$

### Solutions

- [Go (Golang)](solution.go)
