# 📜 Day 12: Documentation & Deployments

### ⏱ Agenda

## [**05m**] 🏆 Objectives

1. Practice and generate standards-based package documentation using Godoc.  
1. Configure and release web applications, APIs, and bots written in Go on Heroku.
1. Set up and use Homebrew to release CLIs written in Go.

## [**10m**] 🌤 Warm Up: Comment All the Things

1. Make sure your MakeUtility project is linked in the [Course Tracker](https://make.sc/trackbew2.5)!
1. Open up your MakeUtility project. Add at least 5 comments on any of the following top-level public declarations:

    - Types
    - Variables
    - Constants
    - Functions
    - Packages

## [**10m**] 💻 Activity: Generate with Godoc

Open your terminal and change directory to `~/go/src/yourproject`. Run the following code:

```bash
ls && godoc . && ls
```

Read through the output and prepare to discuss answers to the following questions:

- What task did running these commands accomplish?
- What changed in the filesystem when we ran Godoc?
- How can we run or see what Godoc generated?
- How does Godoc know what comments to use when generating documentation?

## [**15m**] 📖 Guide: Great Godocs

- To document a **type, variable, constant, function, or package**, write a regular comment directly preceding its declaration, with no blank line in between. Godoc will show that comment as text alongside the item it documents. For example, this is the documentation for the `fmt` package's [`Fprint`](https://golang.org/pkg/fmt/#Fprint) function:
    
    ```golang
    // Fprint formats using the default formats for its operands and writes to w.
    // Spaces are added between operands when neither is a string.
    // It returns the number of bytes written and any write error encountered.
    func Fprint(w io.Writer, a ...interface{}) (n int, err error) {
    ```

- Comments on package declarations should provide **general package documentation**. The first sentence of your package's comment is what appears in Godoc's [package list](https://golang.org/pkg/). These comments can be short, like the [`sort` package](https://golang.org/pkg/sort/)'s brief description:
   
   ```golang
    // Package sort provides primitives for sorting slices and user-defined
    // collections.
    package sort
    ```

- Comments that are not adjacent to a top-level declaration will not appear in Godoc's output.
- Top-level comments beginning with `BUG(who)` are recognized as known bugs.
    - Known bugs are included in the "Bugs” section of the package docs. 
    - The "who” part should be the user name of someone who could provide more information. 
    - For example, this is a known issue from the [bytes package](https://golang.org/pkg/bytes/#pkg-note-BUG):
 
        ```golang
        // BUG(r): The rule Title uses for word boundaries does not handle Unicode punctuation properly.
        ```

## [**10m**] 🌴 BREAK

## [**15m**] 📖 Guide: Deploying on Heroku (APIs, Websites, Bots)

`TODO`

## [**15m**] 📖 Guide: Deploying on Homebrew (CLIs)

`TODO`

## 🌃 [**05m**] Wrap Up / After Class

- Add a checkmark next to the documentation requirement in your repo's `rubric.md`. 
- Commit the documentation you generated before leaving today and the update to your progress.
- Review the [syllabus](https://make.sc/bew2.5) and ensure you are on track to meet all requirements and expectations by the end of the course.
    - _Are you on track to complete 10+ commits in your MakeUtility project?_
    - _Have you completed 10+ Excercism solutions and committed them to the repo you linked in the [Course Tracker](https://make.sc/trackbew2.5)?_
    - _Miss a day from class? Review the lesson plan! Did you turn in all participation-based challenges listed in the [Course Tracker](https://make.sc/trackbew2.5)?_

## 📚 Resources & Credits

- [**Documentation**: Command godoc](https://godoc.org/golang.org/x/tools/cmd/godoc)
- [**Godoc**: Documenting Go Code (Blog Post)](https://blog.golang.org/godoc-documenting-go-code)
