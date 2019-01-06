# Go Challenges

## Table of Contents

* [[TUTORIAL] MakeAsciiArt](#tutorial-makeasciiart)
* [[PROJECT] MakeAvatar](#project-makeavatar)
* [[PROJECT] Realtime Attendance](#project-realtime-attendance)
* [[PROJECT] Realtime TA Queue](#project-realtime-ta-queue)

## [TUTORIAL] MakeAsciiArt

Create an ASCII Art generator that allows users to upload an image, converts it to ASCII art, and returns the generated text as `text/html` or `application/json` output.

**Example**: [asciiart.club](asciiart.club)

### Learning Objectives

* How to set up and use Go in your development environment.
* How to write to the command line.
* How to load an existing image into memory.
* How to validate and sanitize the input provided to your API.
* How to serve a basic API endpoint that provides both text and JSON output.
* How to write an algorithm that solves a distinct problem.
* How to stream output when generating the ASCII for a large image.
* How to return well-crafted error responses to invalid input.
* How to architect a useful, portfolio ready microservice in Go.
  How to deploy your ASCII art service to the world!

### Stretch Challenges

#### Submit Art

* Create an API endpoint (`/gallery/submit`) that allows users to submit their name and a single piece of generated ASCII art to your gallery.
* Save each submission to a database. Each submission should keep track of the date and time submitted, the creator, and the art itself.
* Create an endpoint to GET all submissions, latest first, at `/gallery`.

#### Frontend

Create a single page application with the following UI:

* **Top**: Form to generate new art. Uses `POST` `/gallery/submit` endpoint.
* **Middle**: Gallery of latest submissions Uses `GET` `/gallery` endpoint.
* **Bottom**: Footer with information about you, the programmer!

|     |
|:-:|
| `UPLOAD IMAGE... [BROWSE]`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`[SUBMIT]` |
||
| `GALLERY`|
| `1`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`2`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`3`|
| `4`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`5`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`6`|
| `7`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`8`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`9`|
| `[< PAGE]`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`[> PAGE]`|
||
| `MADE BY DROXEY`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`[GITHUB REPO LINK]`|
||

## [PROJECT] MakeAvatar

Build on the knowledge you earned implementing MakeAsciiArt by creating a custom PNG avatar generator in Go.

**Examples**:

 * [Trello](http://trello.com) - Simple example. User's first and last initial, or first initial if last isn't provided.
 * [Identicons](http://identicon.net) - Used by GitHub, StackOverflow
 * [RoboHash](https://robohash.org) - A fun open source example, example of what we could make with this tutorial

### Learning Objectives

 * How to use sprite sets in order to combine images into a uniquely generated combination of parts.
 * How to create and save a PNG file based on the in-memory image.
 * How to create a unique filename to save to the filesystem based on user metadata.
       * The implementation of the hashing algorithm to uniquely generate a hash that represents the user's data.
       * Includes practical techniques to unique image generation, currently leveraged in industry, that generate unique avatars based on a hash of the user's first and last name, email address, etc.
       * Required when saving to the cloud.
 * How to serve an API endpoint that provides a PNG in response.

## [PROJECT] Realtime Attendance

Build an API that allows students to submit requests for TA help.

 ```bash
 $ attending --setup --username=droxey --class=BEW1.2
 $ attending --class=BEW1.2
 $ attending --submit=droxey/my-assignment-repo
 ```

Flags:

1. `attending --setup --username=droxey --class=BEW1.2`: Run only once. Stores username in the home directory a file called `.attending`.

    Here's an example of the file contents:

    ```bash
    USERNAME=droxey
    ```

1. `attending --class=BEW1.2`: Run to check in to class.
1. `attending --submit=droxey/my-assignment-repo`: Run to submit an assignment.

### Challenge 1: CLI

Create a command line application for students to register for the service, sign in to class, and submit assignments.

### Challenge 2: API

 Create an API that returns the data collected from the CLI application and streams it in realtime.

### Challenge 3: SPA

 Use the API you created to drive a single page application that displays:

* **Top**: Form to check in to class.
* **Middle**:
  * Class Roster: Icon of student in each cell. `*` represents an icon indicating the student is online.
  * History: Charts, etc visualizing student attendance over time.
* **Bottom**: Footer with information about you, the programmer!

| Dashboard Page |
|:-:|
| `CHECK IN TO CLASS...`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`[SUBMIT]` |
||
| `LIVE UPDATES`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_(static height, scroll for earlier updates)_|
| `Joe signed in today @ 1:36pm.`|
| `Sally signed in today @ 1:30pm.`|
| _see earlier updates by scrolling..._ |
||
||
||
| `LIVE CLASS ROSTER` &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; `[VIEW CLASS HISTORY]`|
| `Joe*`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`Courtney`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`Erin`|
| `Jen`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`Anne*`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`Sean`|
| `Alan`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`Adam*`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`Mitch*`|
||
| `MADE BY DROXEY`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`[GITHUB REPO LINK]`|

## [PROJECT] Realtime TA Queue

 Build an API that allows students to submit requests for TA help.

 Students can submit a request via this command:

 ```bash
 $ tahelp --class=BEW1.2 --description="I need help debugging a POST endoint in my Express application." --repo="droxey/brokenproject"`

 Thanks, droxey! You've been added to the queue for BEW1.2.
 Your ticket number is 234234234234. You're currently 4th in line.

 Need to check your status? TA Queues are broadcasted live on campus in the Great Hall.
 Prefer the CLI? Call `tahelp --ticket=234234234234 --status` for live updates (CTRL-z to quit.)
 ```

### Learning Objectives

* How to write to a settings file stored in the user's home directory.
* How to implement create a ticketing system for the queue.
* How to update a queue in real time.
* How to integrate with an external API by leveraging the Slack API to send notifications.

### Challenge 1: CLI

Create a command line application for students and TAs to submit, manage, and escalate requests for help.

 * The `--class`, `--repo`, `--description` flags are all required.
      * Command only accepts valid `--class` values.
      * Users can enter any text in `--name` and `--description`. Remove any newlines from the input.
      * Get the user's GitHub `username` from `--repo`.
      * Generate a `ticket_no` for the student request.
 * `--class`, `--repo`, `--description`, `username`, and `ticket_no` are represented in a `struct`, each instantiation subsequently saved to a database.
 * Students can only have one open ticket at a given time.
 * TAs can escalate issues to a specific instructor with this command: `tahelp --ticket=234234234234 --escalate`.
     * Only TAs can use the `--escalate` flag.
     * Can only be run once per ticket.
 * TAs can close issues via this command: `tahelp --ticket=234234234234 --close`.

 ### Challenge 2: API

 Create a API that returns the data collected from the CLI application and streams it in realtime.

 ### Challenge 3: SPA

 Use the API you created to drive a single page application that displays:

 1. A live, streaming help queue.
 1. A dashboard with statistics for each TA and student.

 ### Challenge 4: Slackbot

 Create a Slackbot that notifies students when the TA is ready to tackle their problem. Additionally, send a Slack message to the instructor for that class, with all the ticket information,when a TA escalates the issue.
