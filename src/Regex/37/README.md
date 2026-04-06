# Challenge 37 - Build a stack exchange scraper

[Stack Exchange](https://stackexchange.com/) is an information power-house, which contains libraries of crowdsourced problems (with answers) across a large number of topics which are as diverse as electronics, cooking , programming, etc.

We are greatly interested in crawling and scraping as many questions, as we can, from stack-exchange. [This](https://electronics.stackexchange.com/questions) is an example of a question library page from stack-exchange.

Your task will be, to scrape the questions from each library page, in the order in which they are listed. You will be provided with the markup of question listing pages, from which you need to detect:
(1) Identifier (2) Question text (which is on the Hyperlink to the question) (3) How long ago the question was asked.

The Markup in the Test Cases will be similar to the sample fragment shown below.

**Please note, that since this markup is real markup from the website, it is likely to contain some stray control and escape characters, unexpected whitespaces and newlines.**

### Solutions

- [TypeScript](solution.ts)
