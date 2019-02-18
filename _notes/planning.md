# High Level Plan

## Day 1: Intro to Go

* [20 Mins] Intro: Go over syllabus and answer student questions.
* [40 Mins] TT: Origins of Go, Go Architecture and Design, Writing Code in Go
  * [Golang FAQ: Origins](https://golang.org/doc/faq#Origins)
  * [Golang FAQ: Design](https://golang.org/doc/faq#Design)
  * [Golang FAQ: Writing Code](https://golang.org/doc/faq#Writing_Code)
* [10 Mins] BREAK
* [30 Mins] Activity: IDE Setup
* [20 Mins] Wrap Up: Introduce Tutorial, 1st HW assignment.

## Day 2: Anatomy and Architecture of Well Crafted Go Projects

* [35 Mins] TT: Anatomy and Architecture of Well Crafted Go Projects
  * [golang-standards/project-layout](https://github.com/golang-standards/project-layout)
  * Demo making directories, GOPATH, etc.
  * `gofmt`, `golint`
  * [How to Write Go Code](https://golang.org/doc/code.html)
* [10 Mins] BREAK
* [15 Mins] Wrap Up: Introduce [Effective Go](https://golang.org/doc/effective_go.html) as our reference text for the course. Students expected to study Effective Go for approximately an hour per week to complete the text by the end of the course.

## Day 3: Command Line Applications in Go

* [15 Mins] Warmup Challenge
* [10 Mins] BREAK

## Day 4: Solving Problems with Go

* [20 Mins] Repl.it Quiz
* [10 Mins] BREAK

## Day 5: APIs in Go

* [20 Mins] Warmup Challenge

  * Challenge

    ```go
    package main

    import (
      "fmt"
      "net/http"
    )

    func main() {
      // Challenge:
      // In the next 15 minutes, create a server that runs on port 8099 and
      // implements a GET endpoint for a route called `/hello`.
      // It should return "Hello with Go!" when requested.
      //
      // Hints:
      // 1. All it takes is 4 lines of Go to acheive this! :)
      // 2. Start coding below this comment.

    }
    ```

  * Solution

  ```go
    http.HandleFunc("/hello", func(w http.ResponseWriter, r *http.Request) {
      fmt.Fprintf(w, "Hello with Go!")
    })
    http.ListenAndServe(":8099", nil)
    ```
* [10 Mins] BREAK

## Day 6: Concurrency and Goroutines

* [15 Mins] Warmup Challenge
* [10 Mins] BREAK

## Day 7: Midterm Exam

* [60 Mins] Midterm Exam
* [10 Mins] BREAK

## Day 8: Go Design Patterns

* [15 Mins] Warmup Challenge
* [10 Mins] BREAK

## Day 9: Integrations and Bots

[gobots](https://github.com/strongo/bots-framework)

* [15 Mins] Warmup Challenge
* [10 Mins] BREAK

## Day 10: Benchmarking, Testing, and Documentation

* [20 Mins] Repl.it Quiz
* [10 Mins] BREAK

## Day 11: Go Microservice Deployment Strategies

* [15 Mins] Warmup Challenge
* [10 Mins] BREAK

## Day 12: ???

* [10 Mins] BREAK

## Day 13: Golang Bingo - Review for Final

* [10 Mins] BREAK

## Day 14: Final Exam

* [60 Mins] Final Exam
