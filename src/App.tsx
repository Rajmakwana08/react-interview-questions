import { useState } from 'react'
import './App.css'

interface Question {
  id: number;
  question: string;
  answer: string;
  codeExample?: string;
}

function App() {
  const [activeId, setActiveId] = useState<number | null>(null);

  const questions: Question[] = [
    {
      id: 1,
      question: "1. What is ReactJS?",
      answer: "ReactJS is an open-source JavaScript library created by Facebook. It is used to build user interfaces (UIs) for web applications, especially single-page applications (SPAs). React allows developers to create complex and interactive UIs by breaking them down into smaller, reusable components. This modular approach makes it easier to develop and maintain large applications."
    },
    {
      id: 2,
      question: "2. What is the Virtual DOM?",
      answer: "The Virtual DOM is a lightweight copy of the real Document Object Model (DOM) that React uses internally. When your application changes (for example, when a user interacts with it), React updates the Virtual DOM first. It then compares the new Virtual DOM with a snapshot of the previous version (a process called reconciliation). Finally, React efficiently updates only the parts of the real DOM that actually changed, rather than reloading the entire page. This leads to faster performance and a smoother user experience, even in complex applications.\n React doesn’t change the real DOM directly. \nInstead, it uses something called the Virtual DOM:\n \tA copy of the real DOM in memory.\n \tReact updates this first, and then updates the real DOM only where needed.",
      codeExample: `// React handles Virtual DOM automatically
function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
} // React will efficiently update only what changed`
    },
    {
      id: 3,
      question: "3. What are React components?",
      answer: "React components are the building blocks of a React application. They are like custom, reusable HTML elements that define parts of the user interface. There are two types of components: Functional Components (simple JavaScript functions that accept props and return JSX) and Class Components (ES6 classes that extend from React.Component).",
      codeExample: `// Functional Component Example
function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}

// Class Component Example
class Welcome extends React.Component {
  render() {
    return <h1>Welcome, {this.props.user}!</h1>;
  }
}`
    },
    {
      id: 4,
      question: "4. What is JSX?",
      answer: "JSX stands for JavaScript XML. It is a syntax extension for JavaScript that lets you write HTML-like code in your JavaScript files. JSX makes it easier to visualize the structure of a UI component. Under the hood, tools like Babel convert JSX into regular JavaScript calls. It keeps your component's structure (HTML) and behavior (JavaScript) in one place, which improves readability and maintainability.",
      codeExample: `// JSX Example
const element = (
  <div className="greeting">
    <h1>Hello, {formatName(user)}!</h1>
    <p>This is JSX</p>
  </div>
);

// Compiled JavaScript
const element = React.createElement(
  'div',
  { className: 'greeting' },
  React.createElement('h1', null, 'Hello, ', formatName(user), '!'),
  React.createElement('p', null, 'This is JSX')
);`
    },
    {
      id: 5,
      question: "5. What is state in React?",
      answer: "State is an object that stores data that can change over time within a component. When state updates, React re-renders the affected components to reflect the new data. State allows components to be interactive and dynamic.",
      codeExample: `// Using useState Hook
function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>
        Increment
      </button>
    </div>
  );
}`
    },
    {
      id: 6,
      question: "6. What are props in React?",
      answer: "Props (short for properties) are read-only inputs passed from a parent component to a child component. They allow data and functions to flow down the component tree. Children use props to render data or invoke functions provided by their parent.",
      codeExample: `// Parent Component
function ParentComponent() {
  return <UserInfo name="Alice" age={25} />;
}

// Child Component
function UserInfo(props) {
  return (
    <div>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
    </div>
  );
}`
    },
    {
      id: 7,
      question: "7. What are React hooks?",
      answer: "Hooks are functions that allow you to 'hook into' React state and lifecycle features from functional components. They eliminate the need for class components in many cases. Common hooks include useState for state management, useEffect for handling side effects, and useContext for working with context.",
      codeExample: `// useState Hook Example
const [count, setCount] = useState(0);

// useEffect Hook Example
useEffect(() => {
  document.title = \`Count: \${count}\`;
}, [count]);

// Custom Hook Example
function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);
  
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return width;
}`
    },
    {
      id: 8,
      question: "8. What is the Context API in React?",
      answer: "The Context API provides a way to pass data through the component tree without having to pass props manually at every level. It's especially useful when many components need access to the same data (like user settings or themes).",
      codeExample: `// Create Context
const ThemeContext = React.createContext('light');

// Provider Component
function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Toolbar />
    </ThemeContext.Provider>
  );
}

// Consumer Component
function Toolbar() {
  const theme = useContext(ThemeContext);
  return (
    <button style={{ background: theme }}>
      I am styled based on theme context!
    </button>
  );
}`
    },
    {
      id: 9,
      question: "9. What is Redux?",
      answer: "Redux is a state management library that helps you manage application state in a predictable way. It uses a single store -> The single place that holds your data, actions to describe what happened, and reducers to determine how the state should change in response to actions.",
      codeExample: `// Action Creator
const increment = () => ({
  type: 'INCREMENT'
});

// Reducer
const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    default:
      return state;
  }
};

// Store
const store = createStore(counterReducer);

// Component
function Counter() {
  const count = useSelector(state => state);
  const dispatch = useDispatch();

  return (
    <button onClick={() => dispatch(increment())}>
      Count: {count}
    </button>
  );
}`
    },
    {
      id: 10,
      question: "10. What are Error Boundaries in React?",
      answer: "Error Boundaries in React are used to catch errors in components and show a fallback UI like 'Something went wrong' — so the whole app doesn't crash. We create them using class components.",
      codeExample: `class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <h3>Something went wrong.</h3>;
    }
    return this.props.children;
  }
}
// Usage: in JSX
<ErrorBoundary>
  <MyComponent />
</ErrorBoundary>
`
    },
    {
      id: 11,
      question: "11. How does data flow in React?",
      answer: "Data in React flows one-way from parent components down to child components.",
      codeExample: `A parent passes a name to a child.
✅ Step 1: Create a Child Component
jsx
Copy
Edit
function Greeting({ name }) {
  return <h2>Hello, {name}!</h2>;
}
✅ Step 2: Use it in a Parent Component
jsx
Copy
Edit
function App() {
  const userName = "Guru"; // data

  return (
    <div>
      <Greeting name={userName} />
    </div>
  );
}
`
    },
    {
      id: 12,
      question: "12. What is the difference between state and props?",
      answer: "State: Managed within the component; mutable; used to store data that might change during a component’s lifetime. \n Props: Passed from parent to child; immutable; used to configure and customize components.",
      codeExample: `✅ props (data from parent)
function Child(props) {
  return <h2>Hello, {props.name}</h2>;
}

✅ state (internal data)
import React, { useState } from "react";

function Parent() {
  const [name, setName] = useState("Guru");

  return <Child name={name} />;
}
`
    },
    {
      id: 13,
      question: "13. What is React Router, and why is it used?",
      answer: "React Router is a library that helps you manage navigation and routing in your React application. \nWhat it does: \n\tIt connects URLs to specific components, enabling users to navigate between different views (pages) without reloading the entire website.",
      codeExample: `import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

<Router>
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/about" component={About} />
  </Switch>
</Router>
`
    },
    {
      id: 14,
      question: "14. explain difference between JSX and TSX?",
      answer: "JSX (JavaScript XML) \n Used in React projects written in JavaScript. \n File extension: .jsx \n Doesn't support TypeScript (no type checking). \n\n\nTSX (TypeScript XML) \n Used in React projects written in TypeScript. \n File extension: .tsx \n Supports type checking and interfaces.",
      codeExample: `JSX example
function Hello() {
  return <h1>Hello World</h1>;
}

TSX example:
type Props = { name: string }; // Define the rules for the props

function Hello({ name }: Props) { // Use the rule here
  return <h1>Hello {name}</h1>;  // Show the name on screen
}

`
    },
    {
      id: 15,
      question: "15. What is the difference between React and Angular?",
      answer: "React is a library focused on building UI components with unidirectional data flow and is easy to integrate with other libraries. Angular is a full-featured framework developed by Google that uses two-way data binding and has more built-in features. Your choice depends on your project's needs; React offers flexibility while Angular provides a more complete package.",
      codeExample: `// React Component Example
function ReactComponent() {
  const [data, setData] = useState(null);
  return <div>{data}</div>;
}

// Angular Component Example (for comparison)
@Component({
  selector: 'app-example',
  template: '<div>{{data}}</div>'
})
export class ExampleComponent {
  data: string;
}`
    },
    {
      id: 16,
      question: "16. How do you handle error boundaries in React?",
      answer: "Error boundaries are special components that catch JavaScript errors anywhere in their child component tree, log the errors, and display a fallback UI instead of crashing the whole app. They are implemented using getDerivedStateFromError and componentDidCatch lifecycle methods.",
      codeExample: `class ErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error('Error caught:', error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-ui">
          <h2>Something went wrong!</h2>
          <button onClick={() => this.setState({ hasError: false })}>
            Try again
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}`
    },
    {
      id: 17,
      question: "17. What is memoization in React?",
      answer: "Memoization is a way to remember the result of a function (component) so React doesn't re-run it every time. It helps improve performance by avoiding unnecessary re-renders. \n It makes the app faster and is done using React.memo, useMemo, and useCallback.",
      codeExample: `// Using React.memo
const MemoizedComponent = React.memo(function MyComponent({ data }) {
  return <div>{/* expensive render */}</div>;
});

// Using useMemo for expensive calculations
function DataGrid({ items }) {
  const sortedItems = useMemo(() => {
    return [...items].sort((a, b) => b.value - a.value);
  }, [items]);

  return <div>{sortedItems.map(item => (
    <Row key={item.id} data={item} />
  ))}</div>;
}`
    },
    {
      id: 18,
      question: "18. How does React.memo work?",
      answer: "React.memo is used to stop re-rendering a component if its props have not changed. It's like a memory check — if the inputs (props) are the same, React skips re-rendering.",
      codeExample: `import React, { useState } from 'react';

const Child = React.memo(({ name }) => {
  console.log('Child rendered');
  return <h3>Hello, {name}</h3>;
});

function Parent() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Child name="Guru" />
      <button onClick={() => setCount(count + 1)}>Click Me {count}</button>
    </div>
  );
}

export default Parent;
`
    },
    {
      id: 19,
      question: "19. What are React portals?",
      answer: "React Portals are used to render elements outside the main app root — for example, to show a modal on top of everything.  like (nav-bar size is fixed top you scroll but this not scroll)",
      codeExample: `// Portal Example

index.html
<body>
  <div id="root"></div>
  <div id="modal-root"></div> <!-- Separate place for portal -->
</body>


Modal.js
import ReactDOM from 'react-dom';

function Modal({ children }) {
  return ReactDOM.createPortal(
    <div className="modal">{children}</div>,
    document.getElementById('modal-root')
  );
}


App.js
function App() {
  return (
    <div>
      <h2>Main App</h2>
      <Modal>
        <p>This is inside a Portal!</p>
      </Modal>
    </div>
  );
}
what is used and what is this children?

<Modal>
  <p>This is inside a Portal!</p>
</Modal>
You're passing <p>This is inside a Portal!</p> as the children of the Modal component.
`
    },
    {
      id: 20,
      question: "20. What is lazy loading in React?",
      answer: "Lazy loading in React is used to load components only when they are needed. It improves performance, especially in big apps. \n lazy() is used to load the component later. \n Suspense shows a loading message until the component is ready.",
      codeExample: `// Using React.lazy
import React, { Suspense, lazy } from 'react';

const About = lazy(() => import('./About'));

function App() {
  return (
    <div>
      <h2>My App</h2>
      <Suspense fallback={<div>Loading...</div>}>
        <About />
      </Suspense>
    </div>
  );
}
`
    },
    {
      id: 21,
      question: "21. What are controlled vs. uncontrolled components?",
      answer: "Controlled components store the input value in React state, with every state change triggering a re-render.\n Uncontrolled components store the value in the browser (DOM), and we read it using ref.",
      codeExample: `// Controlled Component
function Form() {
  const [name, setName] = React.useState("");

  return (
    <input 
      value={name} 
      onChange={(e) => setName(e.target.value)} 
    />
  );
}

// Uncontrolled Component
function Form() {
  const inputRef = React.useRef(); // pass inside bracket like useRef(0) to store value

  function showValue() {
    alert(inputRef.current.value);   // this is properies ok .current.value for access current values 
  }

  return (
    <>
      <input ref={inputRef} />
      <button onClick={showValue}>Show</button>
    </>
  );
}
`
    },
    {
      id: 22,
      question: "22. How does React handle component lifecycle?",
      answer: "React handles component lifecycle in three steps: mount (Get data from API when page loads),\n update (update data like count), and \n unmount (remove and disable data). In functional components, we use useEffect() to run code during these phases.",
      codeExample: `// Class Component Lifecycle
App.tsx
import { useState } from 'react'
import './App.css'
import SimpleCounter from './components/SimpleCounter'

function App() {
  const [showCounter, setShowCounter] = useState(true);

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <button onClick={() => setShowCounter(!showCounter)}>
        {showCounter ? 'Remove' : 'Show'} Counter
      </button>
      
      {showCounter && <SimpleCounter />}
    </div>
  );
}
export default App

SimpleCounter.tsx
import { useState, useEffect } from 'react';

function SimpleCounter() {
    // State for our counter
    const [count, setCount] = useState(0);

    // 1. BIRTH: Runs when component is created
    useEffect(() => {
        alert('👶 Component is Born!');
        
        // 3. DEATH: Runs when component is destroyed
        return () => {
            alert('💀 Component is Dead!');
        };
    }, []);

    // 2. GROWTH: Runs when count changes
    useEffect(() => {
        if (count > 0) {
            alert('🔄 Count changed to: ' + count);
        }
    }, [count]);

    return (
        <div>
            <h2>Count: {count}</h2>
            <button onClick={() => setCount(count + 1)}>
                Click me (+1)
            </button>
        </div>
    );
}

export default SimpleCounter;
`
    },
    {
      id: 23,
      question: "23. What is reconciliation in React?",
      answer: "Reconciliation is the process React uses to compare the old and new Virtual DOMs. It updates only the parts that changed in the real DOM to make the UI fast and efficient.",
      codeExample: `// Example showing reconciliation
import React, { useState } from "react";

function Greeting() {
  const [text, setText] = useState("Welcome");

  return (
    <div>
      <h1>Hello</h1>
      <p>{text}</p>
      <button onClick={() => setText("Goodbye")}>Change Text</button>
    </div>
  );
}

export default Greeting;
`
    },
    {
      id: 24,
      question: "24. What is the useRef hook?",
      answer: "useRef is a hook in React used to access DOM elements and store values \n that doesn't re-render the component when changed.",
      codeExample: `// Accessing DOM elements
// Uncontrolled Component
function Form() {
  const inputRef = React.useRef(); // pass inside bracket like useRef(0) to store value

  function showValue() {
    alert(inputRef.current.value);   // this is properies ok .current.value for access current values 
  }

  return (
    <>
      <input ref={inputRef} />
      <button onClick={showValue}>Show</button>
    </>
  );
}`
    },
    {
      id: 25,
      question: "25. What are pure components?",
      answer: "Component re-renders every time, but PureComponent avoids re-rendering if props and state didn't change — it's better for performance. \n PureComponent uses shallow comparison to check if props/state changed. If they are the same in memory, no re-render. If they look same but are new objects → different in memory → it will re-render.",
      codeExample: `// Class Pure Component
import React, { Component, PureComponent } from 'react';

class NormalComp extends Component {
  render() {
    console.log("Normal Component");
    return <div>{this.props.name}</div>;
  }
}

class PureComp extends PureComponent {
  render() {
    console.log("Pure Component");
    return <div>{this.props.name}</div>;
  }
}
`
    },
    {
      id: 26,
      question: "26. How do you handle forms in React?",
      answer: "Forms in React can be handled using controlled components (where form data is controlled by state) or uncontrolled components (where form data is handled by the DOM). \n In React, I handle forms using controlled components. \n I store the input values in state using useState, and update it using onChange handlers. \n This way, the form input is always in sync with the component's state. \n\n What does e.preventDefault(); mean?\n \te.preventDefault(); stops the page from reloading when a form is submitted.",
      codeExample: `// Controlled Form
import React, { useState } from 'react';

function MyForm() {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(\`Hello, \${name}\`);   // remove this \ in this line ok 
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)} 
      />
      <button type="submit">Submit</button>
    </form>
  );
}
`
    },
    {
      id: 27,
      question: "27. What is one key benefit of using React?",
      answer: "It lets us build UI in small parts (components) and reuse them anywhere in the app, which makes development faster and code easier to manage.\n It means: One component – used many times in different places.",
      codeExample: `// Reusable Button Component
// Button.js (One time create)
function Button(props) {
  return <button onClick={props.onClick}>{props.text}</button>;
}

export default Button;

// App.js
import Button from './Button';

function App() {
  return (
    <div>
      <Button text="Click Me" onClick={() => alert('Hello!')} />
      <Button text="Delete" onClick={() => alert('Deleted!')} />
    </div>
  );
}`
    },
    {
      id: 28,
      question: "28. How do you test React components?",
      answer: "We test React components using tools like Jest and React Testing Library.\n They help us check if the component renders correctly, behaves properly on user actions, and shows expected output.\n\tJest → for writing tests \n\tReact Testing Library → to check what’s on screen",
      codeExample: `// Component Testing Example
// Greeting.js
function Greeting() {
  return <h1>Hello, User!</h1>;
}

export default Greeting;

Now, we write a test for it:

// Greeting.test.js
import { render, screen } from '@testing-library/react';
import Greeting from './Greeting';

test('renders greeting message', () => {
  render(<Greeting />);
  const message = screen.getByText('Hello, User!');
  expect(message).toBeInTheDocument();
});

💡 Explanation in Easy Words:
render() → shows the component in a test environment.

screen.getByText() → finds the text in the screen.

expect(...).toBeInTheDocument() → checks if it's there or not.
`
    },
    {
      id: 29,
      question: "29. What is the role of presentational and container components?",
      answer: "Presentational components focus on the UI and rendering, receiving data via props. Container components handle logic, data fetching, and state management. This separation improves code organization, testing, and maintainability.",
      codeExample: `// Presentational Component
function UserCard({ name }) {
  return <h2>Hello, {name}!</h2>;
}


// Container Component
function UserContainer() {
  const userName = 'Guru'; // logic, maybe from API
  return <UserCard name={userName} />;
}
`
    },
    {
      id: 30,
      question: "30. What is the difference between a library and a framework?",
      answer: "A library is a collection of code written by someone else that you can use in your own code to do a specific task. A framework, on the other hand, is a big structure that you write your code inside. It tells you how your code should be written, organized, and connected.",
      codeExample: `// Using a Library (React)
import React from 'react';
function MyComponent() {
  return <div>Hello World</div>;
}

// Using a Framework (Angular)
@Component({
  selector: 'app-root',
  template: '<div>Hello World</div>'
})
export class AppComponent {
  // Framework dictates the structure
}`
    },
    {
      id: 31,
      question: "31. How do you call an API in ReactJS?",
      answer: "To call an API in ReactJS, you can use tools like fetch() (built into JavaScript) or axios (external library), usually inside a useEffect hook. This allows you to load data from an external server when your component loads.",
      codeExample: `// Using fetch()
import React, { useEffect, useState } from 'react';

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Call API when component loads
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error('Error:', error));
  }, []);  // Empty array means run only once

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

// Using axios
import axios from 'axios';

function UsersWithAxios() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => setUsers(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.email}</li>
        ))}
      </ul>
    </div>
  );
}`
    },
    {
      id: 32,
      question: "32. What is the difference between fetch() and axios?",
      answer: "fetch() is a built-in JavaScript function for making API calls, while axios is an external library that provides a more user-friendly interface for API calls. fetch() requires manual JSON parsing and error handling, while axios handles these automatically. Key differences: fetch() is built-in (no installation needed) but requires more code, while axios needs installation but provides shorter, cleaner code with better error handling and automatic JSON parsing.",
      codeExample: `// fetch() example
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));

// axios example
import axios from 'axios';

// GET request
axios.get('https://api.example.com/data')
  .then(response => console.log(response.data))
  .catch(error => console.error('Error:', error));

// POST request comparison
// fetch()
fetch('https://api.example.com/data', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ name: 'John' })
})
  .then(response => response.json())
  .then(data => console.log(data));

// axios
axios.post('https://api.example.com/data', { name: 'John' })
  .then(response => console.log(response.data));`
    },
    {
      id: 33,
      question: "33. How do you create a ReactJS project?",
      answer: "To create a ReactJS project, you first need Node.js installed. Then you can use Create React App (CRA) or Vite to scaffold a new project. The process involves installing Node.js, creating the project using a command-line tool, and starting the development server.",
      codeExample: `// Using Create React App
// Open terminal and run:
npx create-react-app my-app
cd my-app
npm start

// Using Vite (Modern, Faster Alternative)
npm create vite@latest my-app -- --template react
cd my-app
npm install
npm run dev

// Folder Structure Created:
my-app/
├── node_modules/    // Dependencies
├── public/          // Static files
├── src/            // Source code
│   ├── App.js      // Main component
│   └── index.js    // Entry point
└── package.json    // Project configuration`
    },
    {
      id: 34,
      question: "34. What is Vite?",
      answer: "Vite is a super-fast alternative to Create React App for building React apps. It provides a modern setup, faster loading, and a better development experience. Compared to Create React App (CRA), Vite offers very fast instant start times, built-in ES Modules support, and simpler configuration. It can be used for React, Vue, and Svelte projects.",
      codeExample: `// Creating a new React project with Vite
npm create vite@latest my-app -- --template react-ts

// Project structure with Vite
my-app/
├── src/
│   ├── App.tsx
│   └── main.tsx
├── public/
├── vite.config.ts
└── package.json

// Vite configuration example
// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000
  },
  build: {
    outDir: 'dist'
  }
})`
    },
    {
      id: 35,
      question: "35. What is the difference between .tsx and .js files?",
      answer: "A .js file is a standard JavaScript file used in normal React apps, while a .tsx file is used for TypeScript + JSX code in React projects that use TypeScript. TypeScript adds type safety to your code, helping catch errors before runtime. TypeScript is a superset of JavaScript created by Microsoft that adds static typing to the language.",
      codeExample: `// JavaScript (.js) Example
function Greeting(props) {
  return <h1>Hello {props.name}</h1>;
}

// TypeScript (.tsx) Example
type Props = {
  name: string;
  age?: number;
};

function Greeting(props: Props) {
  return (
    <div>
      <h1>Hello {props.name}</h1>
      {props.age && <p>Age: {props.age}</p>}
    </div>
  );
}

// More TypeScript Features
interface User {
  id: number;
  name: string;
  email: string;
}

function UserProfile({ user }: { user: User }) {
  return (
    <div>
      <h2>{user.name}</h2>
      <p>{user.email}</p>
    </div>
  );
}`
    },
    {
      id: 36,
      question: "36. What is useEffect in React?",
      answer: "useEffect is a React Hook that lets you run code when something happens in your component — like when the page loads, a value changes, or the component disappears. It's commonly used for running code when the component loads, fetching data from an API, setting up timers, and cleaning up when the component is removed. The dependency array ([]) controls when the effect runs: empty array means run once on mount, array with values means run when those values change.",
      codeExample: `// Basic Example - Run once on mount
import React, { useEffect } from 'react';

function MyComponent() {
  useEffect(() => {
    console.log("Component loaded!");
  }, []); // Empty array = run once

  return <h1>Hello</h1>;
}

// API Call Example
function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://api.example.com/users")
      .then(res => res.json())
      .then(data => setUsers(data))
      .catch(error => console.error(error));
  }, []); // Runs once when component loads

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

// Timer with Cleanup
function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount(prev => prev + 1);
    }, 1000);

    // Cleanup function
    return () => clearInterval(timer);
  }, []);

  return <div>Count: {count}</div>;
}

// Effect with Dependencies
function DataFetcher({ userId }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    if (userId) {
      fetch(\`/api/users/\${userId}\`)
        .then(res => res.json())
        .then(data => setData(data));
    }
  }, [userId]); // Runs when userId changes

  return data ? <div>{data.name}</div> : <div>Loading...</div>;
}`
    },
    {
      id: 37,
      question: "37. what is useEffect()",
      answer: "useEffect is a hook used to run side effects in a React component like fetching data, updating the DOM (change value or data), Cleanup when component unmounts.",
      codeExample: `// Simple Examples:

1. Run once when page loads (mount):

useEffect(() => {
  console.log("Component mounted!");
  }, []);


  2. Run when a value changes:

useEffect(() => {
  console.log("Count changed!");
}, [count]);


3. Cleanup when component unmounts:

useEffect(() => {
  const timer = setInterval(() => {
    console.log("Tick");
  }, 1000);

  return () => {
    clearInterval(timer); // cleanup
    console.log("Component removed!");
  };
}, []);
`
    },
    {
      id: 38,
      question: "38. what is dom in react?",
      answer: "DOM = Document Object Model \n It’s like a tree structure of your HTML.",
      codeExample: `// Using React.lazy
import React, { Suspense, lazy } from 'react';

const About = lazy(() => import('./About'));

function App() {
  return (
    <div>
      <h2>My App</h2>
      <Suspense fallback={<div>Loading...</div>}>
        <About />
      </Suspense>
    </div>
  );
}
`
    },
  ];

  const toggleQuestion = (id: number) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <div className="app-container">
      <h1>React.js Interview Questions</h1>
      <div className="questions-container">
        {questions.map((q) => (
          <div key={q.id} className="question-item">
            <button 
              className={`question-button ${activeId === q.id ? 'active' : ''}`}
              onClick={() => toggleQuestion(q.id)}
            >
              {q.question}
            </button>
            {activeId === q.id && (
              <div className="answer-container">
                <div className="answer">
                  <h3>Answer:</h3>
                  <p>{q.answer}</p>
                </div>
                {q.codeExample && (
                  <div className="code-example">
                    <h3>Code Example:</h3>
                    <pre>
                      <code>{q.codeExample}</code>
                    </pre>
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
