# Challenge 09 - Encryption scheme

An encryption scheme consists of a set $\{E_e:e \in K\}$ and a corresponding set $\{D_d: d \in K\}$ of encrypting and decrypting functions, respectively.
For each $e \in K$, there is a unique key $d \in K$ where $D_d=E_e^{-1}$.
An encryption scheme is also called a cipher.

It should be clear that every $e$ is actually a representative of some bijection from $M$ to $C$. In this task, you have to count the number of such bijections and, hence, the number of keys that produce different encryption functions.

Assume that $|M|=|C|=n$ which is given as the input.

```golang
differentEncryptions(3) // 6
```

**Constraints:**

- $1 \leq n \leq 10$

### Solutions

- [Go (Golang)](solution.go)
