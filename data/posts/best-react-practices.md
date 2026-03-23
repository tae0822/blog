# React 18: Basics & Concurrent Features

React is a JavaScript library for building interactive UIs. In React, you create **components** that manage their own state and render the UI based on that state.

## A Simple Functional Component

Here's an example using a function component:

```jsx
function HelloMessage({ name }) {
  return <div>Hello {name}</div>;
}
```

```jsx
// Usage
<App>
  <HelloMessage name="Tae" />
</App>;
```

Instead of using render() and classes, we now typically use functional components with hooks like useState or useEffect.

Declarative UI

React makes it easy to create interactive interfaces. You just describe what the UI should look like for each state, and React handles updating the DOM efficiently.

```jsx
const [count, setCount] = useState(0);

return (
  <div>
    <p>Count: {count}</p>
    <button onClick={() => setCount(count + 1)}>Increment</button>
  </div>
);
```

Component-Based

Components are reusable and encapsulated. You can compose them to build complex UIs while keeping logic modular and organized.

Learn Once, Write Anywhere

React works with many environments:
	•	Web (with ReactDOM)
	•	Server-side rendering (Node.js)
	•	Mobile apps (React Native)

You can use the same React knowledge across all of these platforms.

![React Office desk](https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80)

Concurrent React (React 18)

React 18 introduced concurrent rendering, which mostly happens behind the scenes. It helps React prepare multiple versions of your UI simultaneously, keeping your app smooth and responsive.

Benefits of concurrent rendering:
	•	Pause and resume updates to prioritize important changes
	•	Render new screens in the background without blocking user input
	•	Restore previous state when users navigate back
	•	Enable advanced features like Suspense and transitions

You don’t need to understand all the internal mechanics—React handles it. The key idea is that your app can stay fast and responsive, even during heavy UI updates.

```jsx
// Example: Suspense for async components
<Suspense fallback={<div>Loading...</div>}>
  <MyAsyncComponent />
</Suspense>;
```

Concurrent React is a foundation for modern features in React and most new APIs are designed to take advantage of it.

---