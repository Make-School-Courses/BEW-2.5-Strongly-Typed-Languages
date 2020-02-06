# 📜 Day 6: Scraping the Web

## ⏱ Lesson Plan

1. [⏱ Lesson Plan](#-lesson-plan)
2. [[**05m**] 🏆 Objectives](#05m--objectives)
3. [[**05m**] 🤷‍♀️ Why You Should Know This](#05m-️-why-you-should-know-this)
4. [[**15m**] 📖 Overview: Web Scraping](#15m--overview-web-scraping)
5. [[**20m**] 💻 Activity: Selector Diner](#20m--activity-selector-diner)
6. [[**15m**] 📖 Overview: Colly](#15m--overview-colly)
7. [[**30m**] 💻 Activity: Work Out a Workflow](#30m--activity-work-out-a-workflow)
8. [📚 Resources & Credits](#-resources--credits)

## [**05m**] 🏆 Objectives

1. Identify the critical steps to collecting data using web scraping techniques.

<!--
|   Level   | Verbs |
| --------- | ----- |
| 6: Create | design, formulate, build, invent, create, compose, generate, derive, modify, develop |
| 5: Evaluate | choose, support, relate, determine, defend, compare, contrast, justify, support, convince, select |
| 4: Analyze | classify, break down, categorize, analyze, diagram, illustrate, criticize, simplify, associate |
| 3: Apply | calculate, predict, apply, solve, illustrate, use, demonstrate, determine, model, perform, present |
| 2: Understand | describe, explain, paraphrase, restate, summarize, contrast, interpret, discuss |
| 1: Remember | list, recite, outline, define, name, match, quote, recall, identify, label, recognize |
-->

## [**05m**] 🤷‍♀️ Why You Should Know This

- All projects need data before launching!
- Available datasets may not meet your needs or require additional supporting data from a source on the web.
- Save important data before a website goes offline for archival purposes.

## [**15m**] 📖 Overview: Web Scraping

> **Web Scraping**: *the process of extracting data from a website*.

### How Web Scrapers Work

1. Request a URL
2. Receive an HTML response from the server
3. Parse the HTML response using selector syntax

### Selectors for Web Scraping

Below are the most common selectors used when scraping the web for the purposes of data collection.

| Name                 | Syntax          | Description                                                  |
| -------------------- | --------------- | ------------------------------------------------------------ |
| **Element**          | `a`             | Any element  `section`, `a`, `table`, etc.                   |
| **ID**               | `#home-link`    | First element with `id="video-player"`                       |
| **Class**            | `.blog-post`    | Any element with `class="blog-post"`                         |
| **Attribute**        | `a[href]`       | All values of the `href` attribute assigned to any `a` element |
| **Pseudo-Attribute** | `a:first-child` | The first `a` element                                        |

Let's practice selectors now --- they're the most important part of writing an awesome web scraper! If the selector isn't correct, nothing will return, and no data will have been collected as a result of running your scraper.

## [**20m**] 💻 Activity: Selector Diner

Choose the right plates at the [CSS Diner](https://flukeout.github.io/) to level up your selector skills in preparation for your Web Scraper project.

## [**15m**] 📖 Overview: Colly

A popular open source package, [Colly](https://go-colly.org), provides a clean foundation to write any kind of crawler/scraper/spider. Features include:

- Lots of cool Go language concepts!
- Fast (>1k request/sec on a single core)
- Manages request delays and maximum concurrency per domain
- Automatic cookie and session handling
- Sync/async/parallel scraping
- Distributed scraping
- Caching

### Starter Code

Starter code is included in the [project repository](https://github.com/make-school-labs/makescraper). Let's go through it together!

### More Examples

- [**Colly**: Docs](http://go-colly.org/docs/): Check out the sidebar for 20+ examples!
- [**Ali Shalabi**: Syntax-Helper](https://github.com/alishalabi/syntax-helper): Command line interface to help generate proper code syntax, pulled from the Golang documentation.

## [**30m**] 💻 Activity: Work Out a Workflow

_Complete the workflow worksheet distributed in class._

When you're done, use the remaining lab time to begin your project! You'll be able to complete at least a few requirements after what you've learned today. We'll learn how to serialize and store JSON during our next class.

## 📚 Resources & Credits

- [**W3C**: Selectors](https://www.w3.org/TR/CSS22/selector.html)
- [Colly](https://go-colly.org): Starter code derived from [basic](http://go-colly.org/docs/examples/basic/) example.
