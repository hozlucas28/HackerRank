<h1 align="center">
    HackerRank
</h1>

<p align="center">
    <strong>Repository with the solutions of <a href="https://www.hackerrank.com/" target="_blank">HackerRank<a> challenges.</strong>
</p>

<p align="center">
    <a href="#summary">Summary</a> •
    <a href="#installation">Installation</a> •
    <a href="#challenges">Challenges</a> •
    <a href="#related">Related</a> •
    <a href="#license">License</a> •
    <a href="#contact">Contact</a>
</p>

<p align="center">
		<a href="https://www.hackerrank.com/" target="_blank">
			<img src=".github/docs/assets/hackerrank-logo.png" alt='"HackerRank" logo' width="800">
		</a>
</p>

## Summary

This repository serves as a housing solutions to <a href="https://www.hackerrank.com/" target="_blank">HackerRank<a> challenges. HackerRank is a platform where developers can practice coding skills, prepare for interviews, and get hired by top tech companies.

> This repository contains solutions in Node.js (with TypeScript), and Go (Golang).

## Installation

- Clone the repository.
- Install [Visual Studio Code](https://code.visualstudio.com/), [Docker Desktop](https://www.docker.com/), and [Dev Containers](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers) (VSCode extension).
- Open the repository folder in Visual Studio Code.
- Reopen the project in a Dev Container, pressing `F1` and selecting `Dev Containers: Rebuild and Reopen in Container`.
- Wait for the container to be built and started.
- That's it! You are ready to explore the code and run the solutions.

<details>
<summary>How can I test a Node.js solution?</summary>

1. Open the integrated terminal of Visual Studio Code.
2. Run the desired test with the command `bun test src/<CATEGORY>/<CHALLENGE NUMBER>/`

> If you want to run all Node.js tests of a category, you can use the command `bun run test:node:<CATEGORY>`.

</details>

<details>
<summary>How can I test a Go (Golang) solution?</summary>

1. Open the integrated terminal of Visual Studio Code.
2. Run the desired test with the command `cd src/<CATEGORY>/<CHALLENGE NUMBER>/ && go test ./...`

> If you want to run all Go (Golang) tests of a category, you can use the command `bun run test:go:<CATEGORY>`.

</details>

## Challenges

### SQL

|     #     | Challenge                     | Difficulty | Score earned |     Description     |
| :-------: | ----------------------------- | :--------: | :----------: | :-----------------: |
|    01     | Revising the select query I   |     🟢     |    **10**    | [Show](src/SQL/01/) |
|    02     | Revising the select query II  |     🟢     |    **10**    | [Show](src/SQL/02/) |
|    03     | Select all                    |     🟢     |    **10**    | [Show](src/SQL/03/) |
|    04     | Select by ID                  |     🟢     |    **10**    | [Show](src/SQL/04/) |
|    05     | Japanese cities' attributes   |     🟢     |    **10**    | [Show](src/SQL/05/) |
|    06     | Japanese cities' names        |     🟢     |    **10**    | [Show](src/SQL/06/) |
|    07     | Weather observation station 1 |     🟢     |    **15**    | [Show](src/SQL/07/) |
|    08     | Weather observation station 2 |     🟢     |    **15**    | [Show](src/SQL/08/) |
|    09     | Weather observation station 3 |     🟢     |    **10**    | [Show](src/SQL/09/) |
| **Total** |                               |   **/**    |   **100**    |        **/**        |

### Security

|     #     | Challenge                          | Difficulty | Score earned |       Description        |
| :-------: | ---------------------------------- | :--------: | :----------: | :----------------------: |
|    01     | Functions (I)                      |     🟢     |    **5**     | [Show](src/Security/01/) |
|    02     | Functions (II)                     |     🟢     |    **5**     | [Show](src/Security/02/) |
|    03     | Bijective functions                |     🟢     |    **10**    | [Show](src/Security/03/) |
|    04     | Function inverses                  |     🟢     |    **10**    | [Show](src/Security/04/) |
|    05     | Permutations                       |     🟢     |    **10**    | [Show](src/Security/05/) |
|    06     | Involution                         |     🟢     |    **10**    | [Show](src/Security/06/) |
|    07     | Message space and ciphertext space |     🟢     |    **10**    | [Show](src/Security/07/) |
|    08     | Key spaces                         |     🟢     |    **10**    | [Show](src/Security/08/) |
|    09     | Encryption scheme                  |     🟢     |    **10**    | [Show](src/Security/09/) |
|    10     | PRNG sequence guessing             |     🟠     |    **50**    | [Show](src/Security/10/) |
|    11     | Keyword transposition cipher       |     🟢     |    **50**    | [Show](src/Security/11/) |
|    12     | Basic cryptanalysis                |     🔴     |    **50**    | [Show](src/Security/12/) |
| **Total** |                                    |   **/**    |   **230**    |          **/**           |

### Software Engineer Prepare Kit

|     #     | Challenge                                             | Difficulty | Score earned |                     Description                     |
| :-------: | ----------------------------------------------------- | :--------: | :----------: | :-------------------------------------------------: |
|    01     | Count elements greater than previous average          |     🟢     |    **50**    | [Show](src/Software%20Engineer%20Prepare%20Kit/01/) |
|    02     | Find the smallest missing positive integer            |     🟢     |    **50**    | [Show](src/Software%20Engineer%20Prepare%20Kit/02/) |
|    03     | Check palindrome by filtering non-letters             |     🟢     |    **50**    | [Show](src/Software%20Engineer%20Prepare%20Kit/03/) |
|    04     | Check for non-identical string rotation               |     🟢     |    **50**    | [Show](src/Software%20Engineer%20Prepare%20Kit/04/) |
|    05     | Target index search                                   |     🟢     |    **50**    | [Show](src/Software%20Engineer%20Prepare%20Kit/05/) |
|    06     | Find first occurrence                                 |     🟢     |    **50**    | [Show](src/Software%20Engineer%20Prepare%20Kit/06/) |
|    07     | Maximum number of non-overlapping intervals           |     🟢     |    **50**    | [Show](src/Software%20Engineer%20Prepare%20Kit/07/) |
|    08     | Validate properly nested brackets                     |     🟢     |    **50**    | [Show](src/Software%20Engineer%20Prepare%20Kit/08/) |
|    09     | Min-tracking stack implementation                     |     🟢     |    **50**    | [Show](src/Software%20Engineer%20Prepare%20Kit/09/) |
|    10     | One-pass removal of k-th node from end                |     🟢     |    **50**    | [Show](src/Software%20Engineer%20Prepare%20Kit/10/) |
|    11     | Count number pairs                                    |     🟢     |    **50**    | [Show](src/Software%20Engineer%20Prepare%20Kit/11/) |
|    12     | Remove consecutive duplicates from sorted linked list |     🟢     |    **50**    | [Show](src/Software%20Engineer%20Prepare%20Kit/12/) |
|    13     | Generate valid angle bracket sequences                |     🟢     |    **50**    | [Show](src/Software%20Engineer%20Prepare%20Kit/13/) |
|    14     | Remove elements within K distance                     |     🟢     |    **50**    | [Show](src/Software%20Engineer%20Prepare%20Kit/14/) |
|    15     | Two sum                                               |     🟢     |    **50**    | [Show](src/Software%20Engineer%20Prepare%20Kit/15/) |
|    16     | Check valid anagram                                   |     🟢     |    **50**    | [Show](src/Software%20Engineer%20Prepare%20Kit/16/) |
|    17     | Lexicographical letter combinations of phone digits   |     🟢     |    **50**    | [Show](src/Software%20Engineer%20Prepare%20Kit/17/) |
|    18     | Place N cameras without conflict on blocked grid      |     🟢     |    **50**    | [Show](src/Software%20Engineer%20Prepare%20Kit/18/) |
|    19     | Custom Fibonacci sequence                             |     🟢     |    **50**    | [Show](src/Software%20Engineer%20Prepare%20Kit/19/) |
|    20     | Ways to fill slots with single or double coverage     |     🟢     |    **50**    | [Show](src/Software%20Engineer%20Prepare%20Kit/20/) |
|    22     | Height of binary search tree                          |     🟢     |    **50**    | [Show](src/Software%20Engineer%20Prepare%20Kit/22/) |
|    24     | Merge and sort intervals                              |     🟠     |    **75**    | [Show](src/Software%20Engineer%20Prepare%20Kit/24/) |
|    31     | Next greater element with position offset             |     🟠     |    **75**    | [Show](src/Software%20Engineer%20Prepare%20Kit/31/) |
|    34     | Reverse even-indexed nodes and append                 |     🟠     |    **75**    | [Show](src/Software%20Engineer%20Prepare%20Kit/34/) |
| **Total** |                                                       |   **/**    |   **1275**   |                        **/**                        |

## Related

- [Solutions of the AdventJS - 2023](https://github.com/hozlucas28/AdventJS-Solutions-2023)
- [Solutions of the AdventJS - 2024](https://github.com/hozlucas28/AdventJS-Solutions-2024)
- [Solutions of the AdventJS - 2025](https://github.com/hozlucas28/AdventJS-Solutions-2025)
- [Solutions of the Advent of TypeScript - 2023](https://github.com/hozlucas28/AdventTS-Solutions-2023)
- [Solutions of the Advent of TypeScript - 2024](https://github.com/hozlucas28/AdventTS-Solutions-2024)
- [Solutions of the Halloween-dev - 2025](https://github.com/hozlucas28/Halloween-Dev-Solutions-2025)

## License

This repository is under [MIT license](LICENSE), if you want to see what you are allowed to do with the content of this repository, please visit [choosealicense.com](https://choosealicense.com/licenses/) for more information.

## Contact

If you want to contact me, please see my [socials medias](https://github.com/hozlucas28) in my GitHub profile.
