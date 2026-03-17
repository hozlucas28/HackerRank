# Challenge 08 - Key spaces

$`K`$ denotes a set called the key space. Any element of $`K`$ is called a key.

Each element $`e \in K`$ uniquely determines a bijection from $`M`$ to $`C`$, denoted by $`E_e`$. The $`E_e`$ is called an encryption function. Similarly for each $`d \in K`$, we have a bijection from $`C`$ to $`M`$, denoted by $`D_d`$, and it is called a decryption function.

For example, consider the same shifting function that we dealt with in the previous challenge. Now, suppose the amount of shifting we do is some $`e`$. In the last challenge, $`e=1`$. Then $`e`$ is a valid key representing the bijective function $`f(x,e)=shift\_x\_by\_e`$.

For this task, consider a message that consists of decimal digits and a key, $`e`$, which operates by shifting each digit by $`e`$ places. Find the corresponding ciphertext.

```golang
ciphertextMsg("391", 2) // "513"
```

**Constraints:**

- $`1 \leq Length\ of\ the\ string \leq 10`$
- $`0 \leq e \leq 9`$

### Solutions

- [Go (Golang)](solution.go)
