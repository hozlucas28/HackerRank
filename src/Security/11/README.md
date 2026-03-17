# Challenge 11 - Keyword transposition cipher

A keyword transposition cipher is a method of choosing a monoalphabetic substitution to encode a message. The substitution alphabet is determined by choosing a keyword, arranging the remaining letters of the alphabet in columns below the letters of the keyword, and then reading back the columns in the alphabetical order of the letters of the keyword.

For instance, if one chose the keyword `SECRET`, the columns generated would look like the following diagram. Note how the letters in the keyword are skipped when laying out the columns, and duplicate letters are removed from the keyword:

```plaintext
SECRT
ABDFG
HIJKL
MNOPQ
UVWXY
Z
```

Since the alphabetical order of the characters in the keyword is `CERST`, the columns are then rearranged based on the first row. Then, the letters are read column-wise to get the substitution cipher as shown below:

```plaintext
CERST         CDJOW
DBFAG         EBINV
JIKHL    =>   RFKPX
ONPMQ         SAHMUZ
WVXUY         TGLQY
   Z
```

After that, we match the order to the alphabet to get:

```plaintext
Original:     ABCDE FGHIJ KLMNO PQRSTU VWXYZ
Substitution: CDJOW EBINV RFKPX SAHMUZ TGLQY
```

**Your task:**

Given a piece of ciphertext and the keyword used to encipher it, write an algorithm to output the original message with the keyword transposition cipher described above.

```golang
decodeMessages(2, []string{"SPORT", "SECRET"}, []string{"LDXTW KXDTL NBSFX BFOII LNBHG ODDWN BWK", "JHQSU XFXBQ"})
// ["ILOVE SOLVI NGPRO GRAMM INGCH ALLEN GES", "CRYPT OLOGY"]
```

### Solutions

- [Go (Golang)](solution.go)
