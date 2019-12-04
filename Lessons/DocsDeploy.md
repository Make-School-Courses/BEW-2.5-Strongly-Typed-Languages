# 📜 Day 12: Documentation & Deployments

### ⏱ Agenda

1. [[**05m**] 🏆 Objectives](#05m--objectives)
2. [[**10m**] 🌤 Warm Up: Comment All the Things](#10m--warm-up-comment-all-the-things)
3. [[**15m**] 💻 Activity: Generate with Godoc](#15m--activity-generate-with-godoc)
   1. [Why Practice This](#why-practice-this)
   2. [Step By Step](#step-by-step)
4. [[**15m**] 📖 Overview: Great Godocs](#15m--overview-great-godocs)
5. [[**05m**] 🌃 Wrap Up / After Class](#05m--wrap-up--after-class)
6. [📚 Resources & Credits](#-resources--credits)
   1. [Documentation](#documentation)
   2. [Deployment](#deployment)

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

## [**15m**] 💻 Activity: Generate with Godoc

### Why Practice This

When you are preparing to publish a package, you should make sure that the documentation looks correct by running a local copy of godoc. Let's try it now!

### Step By Step

1. Open your terminal and change directory to `~/go/src/yourproject`. Run the following code:

     ```bash
     godoc -http=:6060 &
     ```

2. Visit http://localhost:6060/pkg in your browser. Search for the name of your package, and click the link to access your generated GoDocs.

    **Example 1**: In my [Gopherology](https://github.com/droxey/gopherology) project, the generated documentation for the public utils package can be found at http://localhost:6060/pkg/github.com/droxey/gopherology/utils.


3. Prepare to discuss answers to the following questions:

   - What task did running this command accomplish?
   - Did anything change in the filesystem when we ran Godoc?
   - How can we run or see what Godoc generated?
   - How does Godoc know what comments to use when generating documentation?

## [**15m**] 📖 Overview: Great Godocs

- You should modify your package imports in order to properly generate GoDocs and prepare for any deployment. Here's a handy guide to accomplish this task:
    - The full import of your package often has something identifying its author _(particularly on hosting sites like GitHub, where `github.com/droxey/...` is the full import)_, should always have the project name, and should end with the name of the package you've developed if it is different from the project name.
    - For instance, the `gopherology` project provides a `utils` package, and is written by Dani Roxberry, and thus has the following import path:

        ```bash
        import "github.com/droxey/gopherology/utils"
             ^         ^          ^     ^
             |         |          |     `-- Package name
             |         |          `-------- Project name
             |         `------------------- Author's handle
             `----------------------------- Hosting site
        ```

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

Let's get to know another helpful deployment tool,  [Formula Go](https://jkawamoto.github.io/fgo/). Formula Go helps you to build and upload your software written in Go; and then prepares [Homebrew](http://brew.sh/) and [Linuxbrew](http://linuxbrew.sh/) formulae for it.

Formula Go assumes your software is hosted in GitHub, and its compiled binaries are published in GitHub’s release page.

### Step 1: Installation & Setup

Formula Go can be installed via Homebrew or Linuxbrew.

**1a**. Install using the two commands below:

```bash
brew tap jkawamoto/fgo
brew install fgo
```

**1b**. Create a [new Personal API Token on GitHub](https://github.com/settings/tokens/new) with the following scopes checked:

<p align="center">
    <img src="https://make-school-courses.github.io/BEW-2.5-Strongly-Typed-Ecosystems/Lessons/img/new-token.png" width="600">
</p>

**1c**. Copy the new token to your clipboard.

**1d**. Run the below command to configure your local `git` repository to store the token in your `git` settings:

```bash
git config github.token "PASTE_GITHUB_API_TOKEN_HERE"
```

### Step 2: Initialize

In the root of your repository, run this command to create a `homebrew` directory and generate a Homebrew formula template.

```bash
fgo init –desc="A short description of what your application does."
```

`fgo init` will check your `git` configuration to obtain information about your GitHub user name and repository name, which are required when releasing your application on Homebrew.

### Step 3: Build & Upload

```bash
fgo build VERSION_NUMBER
```

Running `fgo build` will build your application and save the binary to the `pkg` directory. Then, this command uploads the built binary files to GitHub. Finally, after uploading to GitHub, it updates a Homebrew formula in `homebrew` directory.

When debugging, you may need to build your program but not upload it. To do this, run `fgo build` without a version number. Formula Go will then build your program in the `pkg/snapshot` directory without uploading.

We can learn more about the `fgo build` command by running `fgo build --help`:

```bash
$ fgo build --help
NAME:
   fgo build - build binaries, upload them, and update the brew formula.

USAGE:
   fgo build [command options] [version]

DESCRIPTION:
   build command runs build and release targets in the Makefile to build your
software and upload the binary files to GitHub. This command takes an argument,
version, which specifies the version to be created. If it is omitted, "snapshot"
will be used and uploading will be skipped.

To run this command, a GitHub API token is required. Users have to give a token
via one of the -t/--token flag, GITHUB_TOKEN environment variable, and github.token
variable in your .gitconfig.

If -b/--body flag isn't given but your CHANGELOG.md contains a release note
associated with that version, the release note will be copied to the release
page in GitHub.

This command also updates the homebrew formula. After finishing this command,
you need to push the updated formula.

OPTIONS:
   -t TOKEN, --token TOKEN    GitHub API TOKEN for uploading binaries [$GITHUB_TOKEN]
   -b TEXT, --body TEXT       TEXT describing the contents of this release
   -p value, --process value  the number of goroutines (default: 12)
   --delete                   delete release and its git tag in advance if exists
   --draft                    create a draft (unpublished) release
   --pre                      mark this release is a prerelease
```

## [**05m**] 🌃 Wrap Up / After Class

- Add a checkmark next to the documentation requirement in your repo's `rubric.md`.
- Commit the documentation you generated before leaving today and the update to your progress.
- Review the [syllabus](https://make.sc/bew2.5) and ensure you are on track to meet all requirements and expectations by the end of the course.
    - _Are you on track to complete 10+ commits in your MakeUtility project?_
    - _Have you completed 10+ Excercism solutions and committed them to the repo you linked in the [Course Tracker](https://make.sc/trackbew2.5)?_
    - _Miss a day from class? Review the lesson plan! Did you turn in all participation-based challenges listed in the [Course Tracker](https://make.sc/trackbew2.5)?_

## 📚 Resources & Credits

### Documentation

- [**Documentation**: Command godoc](https://godoc.org/golang.org/x/tools/cmd/godoc)
- [**Godoc**: Documenting Go Code (Blog Post)](https://blog.golang.org/godoc-documenting-go-code)

### Deployment

- [Formula Go](https://jkawamoto.github.io/fgo/)
