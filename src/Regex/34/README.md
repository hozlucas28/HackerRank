# Challenge 34 - Building a smart IDE - Identifying comments

Jack wants to build an IDE on his own. Help him build a feature which identifies the comments, in the source code of computer programs. Assume, that the programs are written either in C, C++ or Java. The commenting conventions are displayed here, for your convenience. At this point of time you only need to handle simple and common kinds of comments. You don't need to handle nested comments, or multi-line comments inside single comments or single-comments inside multi-line comments.

Your task is to write a program, which accepts as input, a C or C++ or Java program and outputs only the comments from those programs. Your program will be tested on source codes of not more than 200 lines.

### Comments in C, C++ and Java programs

**Single Line Comments:**

```Java
// this is a single line comment
x = 1; // a single line comment after code
```

Please note that in the real world, some C compilers do not necessarily support the above kind of comment(s) but for the purpose of this problem let's just assume that the compiler which will be used here will accept these kind of comments.

**Multi Line Comments:**

```java
/* This is one way of writing comments */
/* This is a multiline
   comment. These can often
   be useful*/
```

### Solutions

- [TypeScript](solution.ts)
