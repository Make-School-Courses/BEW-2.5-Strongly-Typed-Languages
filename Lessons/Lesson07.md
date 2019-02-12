<p align="center">
  <img src="img/typing.gif" height="250">
</p>

# Concurrency, Goroutines, & Practical Applications

| **Elapsed** | **Time**  | **Activity**              |
| ----------- | --------- | ------------------------- |
| 0:00        | 0:05      | Objectives                |
| 0:05        | 0:30      | Overview                  |
| 0:35        | 0:15      | In Class Activity I       |
| 0:50        | 0:10      | BREAK                     |
| 0:60        | 0:50      | In Class Activity II      |
| TOTAL       | 2:00      |                           |

## Why You Should Know This

`TODO` Explain why students should care to learn the material presented in this class.

## Class Learning Objectives/Competencies (5 min)

1. `TODO` Identify and describe
2. `TODO` Define
3. `TODO` Design
4. `TODO` Implement

## Overview/TT I

### Goroutines (30 min)

`TODO`: Goroutines lecture

## In Class Activity I (15 min)

**Before Starting**: Brainstorm **command(s)** you'd like your Slackbot to perform.

### Create New Slack App

1. **Have these docs open and ready as you configure a [Slack Bot User](https://api.slack.com/bot-users)**.
2. Point your browser to the **[Create a Slack App]((https://api.slack.com/apps?new_app=1))** page.
3. Enter a **name that fits the problem you're trying to solve**.
4. Select **Product College workspace** from the Workspace drop-down.
5. Click the **Create App** button.
6. On the sidebar, under the Features header, click **Bot Users**.
7. Git your bot a **display name** and a **default username**.
8. Click the **Save Changes** button.
9. Go to **OAuth & Permissions**.
10. Click **Install App to Workplace**, and make sure you set the contents of the  dialog to match the below screenshot. This ensuring bot activity for today's class will only end up in `#golang-slackbots`:

<p align="center">
  <img src="img/oauth-enable.png" height="350">
</p>

### Setup Project

1. **Fork** this [starter repo](https://github.com/droxey/goslackit).
   1. It is best if you **work from one computer today**.
2. **Clone the forked repo** to your local machine and `cd REPO_NAME`.
3. Create a `.env` file by running `cp .env.sample .env`.
4. **Paste the Bot Token** from Step 9 in `.env` after `BOT_OAUTH_ACCESS_TOKEN=`.
5. Run `export GO111MODULE=on; go run main.go` to **start the server**.
   1. If it fails to start, **let the instructor know**.

## BREAK (10 min)

## In Class Activity II (60 min)

**If you get stuck, the following tutorial can assist: [Writing Slackbots with Goroutines](https://x-team.com/blog/writing-slackbots-with-goroutines/)**

* There are **3 challenges** written in the project's comments.
  * **Search the project** for `TODO` in order to find them.
* **Complete** each with the help of your team.
  * **Examine the output** of `go run main.go`.
  * Manually **test the bot via Slack** while completing the activity.
* An additional **stretch challenge** is available if you finish early.

## After Class (10 min)

### Heroku Deployment

Deploying your bot means it will run forever --- even if your computer is turned off!

**Use this sample script to deploy your bot to Heroku**:

```bash
$ git clone git@github.com:USERNAME/goslackit.git PROJECT_NAME
$ cd PROJECT_NAME
$ heroku create PROJECT_NAME
$ heroku config:set BOT_OAUTH_ACCESS_TOKEN=YOUR_BOT_TOKEN
$ git push heroku master
$ heroku ps:scale worker=1
```

## Additional Resources

* **[The Go Blog](https://blog.golang.org/modules2019)**: Go Modules in 2019
* **[Concurrency is not Parallelism](https://talks.golang.org/2012/waza.slide)**: Slide deck by Rob Pike
* **[Concurrency in `golang` / Mini Load-Balancer Project](https://gist.github.com/rushilgupta/228dfdf379121cb9426d5e90d34c5b9)**: Awesome gist that shows off a real world, practical application of concurrent techniques.
