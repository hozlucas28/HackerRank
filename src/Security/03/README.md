# Challenge 03 - Bijective functions

Now that we know about one-to-one functions, let's talk about onto functions and bijective functions.

A function $f: X \rightarrow Y$ is onto if and only if each element in the co-domain $Y$ is the image of, at least, one element in the domain $X$. That is: $Im(f)=Y$

If the function $f$ is both one-to-one and onto then $f$ is a bijection from $X$ to $Y$ or, equivalently, $f: X \rightarrow Y$ is a bijective function.

In this task, you'll be given an integer $n$ and a function $f: X \rightarrow X$ where $X=\{1,2,3,...,n\}$. Determine whether the given function is a bijective function or not.

```golang
isBijective(20, []uint8{20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10}) // true
isBijective(5, []uint8{2, 3, 4, 5, 2}) // false
```

**Constraints:**

- $1 \leq n \leq 20$

### Solutions

- [Go (Golang)](solution.go)
