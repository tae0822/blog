## About Node.js®

Node.js is an **asynchronous, event-driven JavaScript runtime** designed to build scalable network applications. Unlike traditional thread-based servers, Node.js handles concurrency without creating multiple OS threads. This makes it lightweight and efficient for I/O-heavy applications.

### Example: Hello World Server

```javascript
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
```

In this example, many connections can be handled concurrently. For each connection, the callback is fired, but if there’s no work, Node.js will simply wait.

Why Node.js is Efficient
	•	Non-blocking I/O: Almost no function in Node.js performs blocking I/O. This allows the server to handle thousands of connections without waiting.
	•	No deadlocks: Because there are no locks, you don’t have to worry about deadlocking your process.
	•	Scalable: Writing scalable network apps is simpler compared to traditional thread-based servers.

If some of these concepts are new, check out more about Blocking vs. Non-Blocking to understand why Node.js can be so efficient.