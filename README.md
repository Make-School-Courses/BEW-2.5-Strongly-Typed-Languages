![](https://raw.githubusercontent.com/ashleymcnamara/gophers/master/GOPHER_AVATARS.jpg)

# BEW2.5: Patterns & Practices in Strongly Typed Languages

|                  Guide                   |    Slack     | Shortlink | Office Hours | Instructor 1-on-1 |
| :--------------------------------------: | :----------: | :--------------------------------------: | :-----------------------------------------------: |  :----------: |
| [**@droxey**](https://github.com/droxey) | `#bew2-5-go` | [make.sc/bew2.5](https://make.sc/bew2.5) | **TA**: MTWTh 12:30 - 1:30pm |  [Click to Schedule](https://make.sc/codewithdani) |

<!-- omit in toc -->
### Table of Contents

- [Course Description](#course-description)
- [Prerequisites](#prerequisites)
- [Learning Objectives](#learning-objectives)
- [Schedule](#schedule)
- [Course Deliverables](#course-deliverables)
- [Evaluation](#evaluation)
- [Additional Resources](#additional-resources)
  - [Update to Latest Version of Go](#update-to-latest-version-of-go)
  - [Links](#links)
- [Make School Course Policies](#make-school-course-policies)

## Course Description

In this course, students discover the value of strongly typed languages in server-side architectures, and dive deep into performant, concurrent programming paradigms present in Go. Known best for it's ability to blend the expressive features of dynamic languages (Python, JavaScript) with the performance capabilities of compiled languages (C, C++), students will gain the syntactic diversity required in today's large-scale platform engineering pursuits. Throughout the course, students will learn and implement the design patterns and best practices that make Go a top choice at high-velocity startups like Lyft, Heroku, Docker, Medium, and more!

## Prerequisites

- [BEW 1.1](https://make.sc/bew1.1)
- [BEW 1.2](https://make.sc/bew1.2)

## Learning Objectives

1. Design and implement command line interfaces, APIs, and bots in Go.
2. Identify and describe the architectures wherein the features of Golang could be best utilized.
3. Build data structures that support unmarshalling JSON retrieved from third-party APIs.
4. Apply Object Relational Mapping techniques to persist data to relational databases in Go.
5. Examine benchmarks to determine how to improve the speed and readability of a Golang project.
6. Gain experience deploying APIs and bots to production.

## Schedule

**Course Dates**: Monday, June 1<sup>st</sup> &mdash; Friday, July 17<sup>th</sup> 2020 _(7 weeks)_<br>
**Class Times**: Monday, Wednesday, & Friday: 1:30 &mdash; 3:30pm _(20 class sessions)_

| Class | Date         | Topics                                                                    |
|:-----:|------------|---------------------------------------------------------------------------|
| 1     | Mon, June 1  | [**Intro to Go / Tutorial Launch**](https://tour.golang.org)                  |
| 2     | Wed, June 3  | 🔬**Lab**: [Tutorial](https://tour.golang.org)                  |
| 3     | Fri, June 5  | **[Static Site Generators](Lessons/SSGProject.md)**                       |
| 4     | Mon, June 8  | 🔬**Lab**: SSG MVP                                                        |
| 5     | Wed, June 10 | **[Files & Directories](Lessons/FilesDirectories.md)**                    |
| 6     | Fri, June 12 | 🔬**Lab**: SSG MVP / SSG v1.1                                             |
| 7     | Mon, June 15 | **[Introducing Warmups](Lessons/WarmUps.md)**: 1<sup>st</sup>Daily Drill |
| 8     | Wed, June 17 | **[Fast Functionality via 3rd Party Libraries](Lessons/3rdPartyLibs.md)**                                                       |
| 9     | Fri, June 19 | **❌NO CLASS - JUNETEENTH OBSERVED** |
| 10    | Mon, June 22 |🔬**Lab**: SSG v1.2 |
| 11    | Wed, June 24 | **[Scraping the Web](Lessons/WebScraping.md)**|
| 12    | Fri, June 26 |**[Working With JSON](Lessons/JSON.md)**  |
| 13    | Mon, June 29 |🔬**Lab**: Web Scraper   |
| 14    | Wed, July 1  | [Project Kickoff](Project/MakeUtility.md) |
| -     | Fri, July 3  | **NO CLASS - INDEPENDENCE DAY OBSERVED**                                  |
| 15    | Mon, July 6  | **[Concurrency & Goroutines](Lessons/Lesson07.md)**                       |
| 16    | Wed, July 8  | **[Documentation & Deployments](Lessons/DocsDeploy.md)**                  |
| 17    | Fri, July 10 | **[Benchmarking & Testing](Lessons/Lesson09.md)**                         |
| 18    | Mon, July 13 | 🔬**Lab**: Final Project                                                  |
| 20    | Fri, July 17 | [**Final Presentations**](Project/MakeUtility.md)                             |

## Course Deliverables

*Assignments **must** be submitted to Gradescope by **11:59PM PST** on the date due.*

| 📚   Assignment                                      | 🔗   Criteria                                                 | 📆   Due Date                                                 |
| :-------------------------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| **[Tour of Go](https://tour.golang.org/welcome/1)** | Done in Class                                                | January 23, 2020 *(Thursday)*                                |
| **Static Site Generator** | [MVP](https://github.com/Make-School-Labs/makesite#mvp)  <br />[v1.1](https://github.com/Make-School-Labs/makesite#v1.1) / [v1.2](https://github.com/Make-School-Labs/makesite#v1.2) | <u>MVP</u>: June 13, 2020 *(Friday)*<br /><u>v1.1</u> / <u>v1.2</u>: June 24, 2020 *(Wednesday)* |
| **Web Scraper** |   [Requirements](https://make.sc/makescraper) |  July 6, 2020 (*Monday*) |
| **Blog Post** | [Rubric](https://docs.google.com/document/d/1T1oqHFoRo0kl7mPUTFupmsoEkLYltKsVgtqyGKDaCgY/edit) | July 17, 2020 *(Friday)* |
| **MakeUtility Project** | [Requirements](https://make.sc/makeutility) |  July 17, 2020 *(Friday)* |

## Evaluation

**To pass this course you must meet the following requirements**:

- Complete the [tutorial](https://tour.golang.org) assigned in class.
- Write and publish one (1) blog post to Medium, dev.to, or a personal blog website.
- Complete the final project according to the associated [project rubric](Project/MakeUtility.md), delivered to the class on the final day of the course.
- Complete all challenges assigned in class.
- Actively participate in class and abide by the attendance policy.
- Make up all classwork from all absences.

## Additional Resources

### Update to Latest Version of Go

New version of Go released? No problem! Run the following command to install the latest version of Golang on your Mac or Linux system:

```bash
git clone https://github.com/udhos/update-golang
cd update-golang
sudo ./update-golang.sh
```

### Links

- [Gophercises](https://gophercises.com/): Real-world side projects with video tutorials!
- [TutorialEdge - Golang Repository](https://github.com/elliotforbes/tutorialedge-v2/tree/master/content/golang): Mini-tutorials to introduce and enhance your Golang knowledge.
- [YouTube - Todd Mcleod](https://www.youtube.com/user/toddmcleod/playlists): Videos to reinforce Golang concepts and techniques that we cover in class.
- [Echo Framework](https://echo.labstack.com/guide): Documentation for Echo, a high performance, extensible, minimalist Go web framework.
- [GORM](http://doc.gorm.io/#): The fantastic ORM library for Golang.

## Make School Course Policies

- [Program Learning Outcomes](https://make.sc/program-learning-outcomes) - What you will achieve after finishing Make School, all courses are designed around these outcomes.
- [Grading System](https://make.sc/grading-system) - How grading is done at Make School
- [Diversity and Inclusion Statement](https://make.sc/diversity-and-inclusion-statement) - Learn about Diversity and Inclusion at Make School
- [Academic Honesty](https://make.sc/academic-honesty-policy) - Our policies around plagiarism, cheating, and other forms of academic misconduct
- [Attendance Policy](https://make.sc/attendance-policy) - What we expect from you in terms of attendance for all classes at Make School
- [Course Credit Policy](https://make.sc/course-credit-policy) - Our policy for how you obtain credit for your courses
- [Disability Services (Academic Accommodations)](https://make.sc/disability-services) - Services and accommodations we provide for students
- [Student Handbook](https://make.sc/student-handbook) - Guidelines, policies, and resources for all Make School students
