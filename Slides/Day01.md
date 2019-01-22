# Intro to Golang

**BEW2.5**<br>_Patterns & Practices in Strongly Typed Ecosystems_

---

## Objectives

1. Complete course overview and **syllabus review**.
1. Learn about the **history of Golang**.
1. **Install Go locally** and write our **first application**.

---

## Course Overview

* We will use Go to **solve common problems** experienced by students and staff **at Make School**.

* By the end of the course, you'll have a **complete suite of `makeschoolutils` that solve numerous problems found in industry**.

~~~

### Syllabus

Visit [make.sc/bew2.5](make.sc/bew2.5) for the latest syllabus.

All class materials can be found at the above shortlink.

~~~

### Tutorial

#### MakeFeedback

_Coming soon!_

<img src="assets/img/tutorial-mockup.svg" height="400" style="border: none; background: none;">

~~~

### Homework

**~6 hours** of homework:

1. **Gophercises**: [_Link Shortener_](https://gophercises.com/exercises/urlshort)
1. **Gophercises**: [_Quiz Game_](https://gophercises.com/exercises/quiz)
1. **Gophercises**: [_Quiet HN_](https://gophercises.com/exercises/quiet_hn)
1. **Gophercises**: [_Image Transform Service_](https://gophercises.com/exercises/transform) _(BONUS)_

<img src="assets/img/quiet-hn.png" height="250" style="border: none; background: none;">
<img src="assets/img/quizgame.png" height="250" style="border: none; background: none;">
<img src="assets/img/img-transform-svc.png" height="250" style="border: none; background: none;">
<img src="assets/img/shorturl.png" height="250" style="border: none; background: none;">

~~~

### Grading Criteria

**_TO PASS, ALL SUBMITTED WORK MUST..._**

1. Be **complete**.
1. Score a **B or higher** on **[Go Report Card](https://goreportcard.com)**.
1. Have **10 or more commits**.

~~~

### Q&A

---

## Get Started With Go

~~~

### Installing Go

1. Visit the [downloads](https://golang.org/dl/) page and choose macOS.
2. Double click the downloaded `.pkg` and install.

<img src="assets/img/download.png" height="200" style="border: none; background: none;">

~~~

### Testing Your Installation

~~~

#### Set Up GOPATH

```bash
cd ~
mkdir go
cd go
```

~~~

#### Hello World

1. `mkdir -p /src/hello`
1. Create a file named `hello.go` and paste the following code:
    ```golang
    package main

    import "fmt"

    func main() {
      fmt.Printf("hello, world\n")
    }
    ```
1. Build `hello.go`:
    ```bash
    $ cd $HOME/go/src/hello
    $ go build
    ```
1. Run it:
    ```bash
    $ ./hello
    hello, world
    ```
    If you see the `hello, world` message then your Go installation is working.
