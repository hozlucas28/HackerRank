# Challenge 01 - Functions (I)

Before we jump into security concepts, let us familiarize ourselves with the mathematical background required for it.

Set $X$ is a collection of elements. Here, $X = \{1,2,3\}$ is one such example. A collection of integers is also a set. Given two sets, $X$ and $Y$, we define a function $f$ that maps every element in $X$ to precisely $1$ element in $Y$.

If $X = \{1,2,3\}$ and $Y = \{\alpha,\gamma,\delta\}$, the function $f$ will return:

$f(1)=\alpha$, $f(2)=\gamma$ and $f(3)=\delta$.

Let us define a function $f^1(x)=x_r$, where $x \in X$ and $x_r \in Y$.
Here, is defined as the remainder of when divided by $11$.

Your task is to complete the function that takes the input $x$ and returns $x_r$

```golang
calculate(17) // 6
```

**Constraints:**

- $1 \leq x \leq 1000$

### Solutions

- [Go (Golang)](solution.go)
