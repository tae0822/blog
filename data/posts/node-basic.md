## About Node.js®

Node.js is an **asynchronous, event-driven JavaScript runtime** built for creating scalable network applications. It allows your server to handle many connections **concurrently**. For each connection, a callback is executed, but if there’s nothing to do, Node.js simply waits — it doesn’t block.

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

### Why Node.js Works Well
- ** Non-blocking I/O: Most functions in Node.js never block. The process only waits if you explicitly use synchronous operations.
- ** No deadlocks: There are no locks, so your code won’t freeze due to deadlocks.
- ** Efficient and scalable: Thread-based servers are heavier and harder to manage, but Node.js can handle thousands of connections easily.

If you’re new to these concepts, check out more on Blocking vs. Non-Blocking to understand why Node.js is so efficient.