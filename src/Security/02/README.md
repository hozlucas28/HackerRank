# Challenge 02 - Functions (II)

We now understand the definition of functions.

If $f(x)=y$, where $x \in X$ and $y \in Y$ then $y$ is called an image of $x$, and $x$ is called the preimage of $y$.

Given $x_1, x_2 \in X$ and $y_1, y_2 \in Y$, $f(x_1)=y_1$ and $f(x_2)=y_2$ We call the function $f: X \rightarrow Y$ as $1 - 1$ (one-to-one) if:

$f(x_1)=f(x_2) \implies x_1 = x_2$

Let us define a particular one-to-one function as $f_2:X \rightarrow X$, such that $f_2(x)=x^2$ where $X=\{1, 2, 3, 4, ...\}$.

The function defined in the previous challenge is not one-to-one because:

$f_1(0)=f_1(11)=0,0\ne11$

Your task is to complete the function that takes $x$ as the input and return $x^2$.

```golang
calculate(16) // 256
```

**Constraints:**

- $1 \leq x \leq 1000 $

### Solutions

- [Go (Golang)](solution.go)
