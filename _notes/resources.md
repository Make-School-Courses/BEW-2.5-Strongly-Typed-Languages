# Resources

* [Golang FAQ](https://golang.org/doc/faq)
* [GoByExample](https://gobyexample.com)
* [Go in 5 Minutes](https://www.goin5minutes.com/screencasts/)
* [Learn Web Programming in Go by Examples](https://gowebexamples.com)
* [Go Code Review Comments](https://github.com/golang/go/wiki/CodeReviewComments)
* [calhoun.io - tutorials for common Go tasks](https://www.calhoun.io)
* [https://pocketgophers.com](PocketGophers)



```js
var schema_obj = new Schema({
data: {
  type: String,
  get: function(data) {
    try {
      return JSON.parse(data);
    } catch() {
      return data;
    }
  },
  set: function(data) {
    return JSON.stringify(data);
  }
}
}```
