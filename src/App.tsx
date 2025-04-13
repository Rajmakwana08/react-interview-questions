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
      answer: "The Virtual DOM is a lightweight copy of the real Document Object Model (DOM) that React uses internally. When your application changes (for example, when a user interacts with it), React updates the Virtual DOM first. It then compares the new Virtual DOM with a snapshot of the previous version (a process called reconciliation). Finally, React efficiently updates only the parts of the real DOM that actually changed, rather than reloading the entire page. This leads to faster performance and a smoother user experience, even in complex applications.",
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
      answer: "Redux is a state management library that helps you manage application state in a predictable way. It uses a single store as the source of truth for your state, actions to describe what happened, and reducers to determine how the state should change in response to actions.",
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
      answer: "Error boundaries are special components that catch JavaScript errors anywhere in their child component tree, log the errors, and display a fallback UI instead of crashing the whole app.",
      codeExample: `class ErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error(error, info);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return this.props.children;
  }
}`
    },
    {
      id: 26,
      question: "26. What is the difference between React and Angular?",
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
      id: 27,
      question: "27. How do you handle error boundaries in React?",
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
      id: 28,
      question: "28. What is memoization in React?",
      answer: "Memoization is an optimization technique that caches the results of expensive computations to prevent unnecessary re-renders when the input data hasn't changed. React provides React.memo and useMemo for this purpose.",
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
      id: 29,
      question: "29. How does React.memo work?",
      answer: "React.memo is a higher-order component that prevents unnecessary re-renders by doing a shallow comparison of props. If the props haven't changed, React reuses the last rendered result.",
      codeExample: `// Basic React.memo usage
const MovieCard = React.memo(function MovieCard({ title, rating }) {
  return (
    <div className="movie-card">
      <h3>{title}</h3>
      <span>{rating} stars</span>
    </div>
  );
});

// Custom comparison function
const MovieCard = React.memo(
  function MovieCard({ movie }) {
    return (
      <div className="movie-card">
        <h3>{movie.title}</h3>
        <span>{movie.rating} stars</span>
      </div>
    );
  },
  (prevProps, nextProps) => {
    return prevProps.movie.id === nextProps.movie.id;
  }
);`
    },
    {
      id: 30,
      question: "30. What are React portals?",
      answer: "Portals provide a way to render children components into a DOM node that exists outside the parent component's hierarchy. They're commonly used for modals, tooltips, and other floating elements.",
      codeExample: `// Portal Example
import ReactDOM from 'react-dom';

function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="modal-overlay">
      <div className="modal">
        {children}
        <button onClick={onClose}>Close</button>
      </div>
    </div>,
    document.getElementById('modal-root')
  );
}

// Using the Modal
function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>
        Open Modal
      </button>
      
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <h2>Modal Content</h2>
        <p>This renders outside the parent DOM hierarchy</p>
      </Modal>
    </div>
  );
}`
    },
    {
      id: 31,
      question: "31. What is lazy loading in React?",
      answer: "Lazy loading is a technique where components or parts of your application are loaded only when they are needed. It reduces the initial load time of an application by splitting the code into smaller chunks.",
      codeExample: `// Using React.lazy
const OtherComponent = React.lazy(() => import('./OtherComponent'));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <OtherComponent />
    </Suspense>
  );
}

// Route-based lazy loading
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));

function App() {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Suspense>
    </Router>
  );
}`
    },
    {
      id: 32,
      question: "32. What are controlled vs. uncontrolled components?",
      answer: "Controlled components are form elements whose value is controlled by React state, with every state change triggering a re-render. Uncontrolled components maintain their own internal state, and you access their values using refs.",
      codeExample: `// Controlled Component
function ControlledForm() {
  const [value, setValue] = useState('');

  return (
    <input
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}

// Uncontrolled Component
function UncontrolledForm() {
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputRef.current.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input ref={inputRef} defaultValue="default" />
    </form>
  );
}`
    },
    {
      id: 33,
      question: "33. How does React handle component lifecycle?",
      answer: "React components go through mounting, updating, and unmounting phases. Class components use lifecycle methods, while functional components use the useEffect hook to handle these phases.",
      codeExample: `// Class Component Lifecycle
class Example extends React.Component {
  componentDidMount() {
    console.log('Component mounted');
  }

  componentDidUpdate(prevProps) {
    if (this.props.value !== prevProps.value) {
      console.log('Value changed');
    }
  }

  componentWillUnmount() {
    console.log('Component will unmount');
  }
}

// Function Component with useEffect
function Example({ value }) {
  useEffect(() => {
    console.log('Component mounted');
    return () => console.log('Component will unmount');
  }, []);

  useEffect(() => {
    console.log('Value changed:', value);
  }, [value]);
}`
    },
    {
      id: 34,
      question: "34. What is reconciliation in React?",
      answer: "Reconciliation is React's process of comparing the virtual DOM with its previous state to determine the minimum number of changes needed to update the actual DOM. This process makes React's rendering efficient.",
      codeExample: `// Example showing reconciliation
function UserList({ users }) {
  return (
    <ul>
      {users.map(user => (
        // Key helps React track which items changed
        <li key={user.id}>
          {user.name}
        </li>
      ))}
    </ul>
  );
}

// React will only update changed items
function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <h1>Count: {count}</h1>
      <ExpensiveComponent /> {/* Won't re-render */}
      <button onClick={() => setCount(c => c + 1)}>
        Increment
      </button>
    </div>
  );
}`
    },
    {
      id: 35,
      question: "35. What is the useRef hook?",
      answer: "useRef is a hook that creates a mutable reference that persists across re-renders. It's commonly used to access DOM elements directly or store values that don't trigger re-renders when changed.",
      codeExample: `// Accessing DOM elements
function TextInput() {
  const inputRef = useRef(null);

  const focus = () => {
    inputRef.current.focus();
  };

  return (
    <>
      <input ref={inputRef} />
      <button onClick={focus}>Focus Input</button>
    </>
  );
}

// Storing mutable values
function Timer() {
  const [count, setCount] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCount(c => c + 1);
    }, 1000);

    return () => clearInterval(intervalRef.current);
  }, []);

  return <div>Count: {count}</div>;
}`
    },
    {
      id: 36,
      question: "36. What are pure components?",
      answer: "Pure components are components that implement shouldComponentUpdate with a shallow prop and state comparison. They help optimize performance by preventing unnecessary re-renders.",
      codeExample: `// Class Pure Component
class PureGreeting extends React.PureComponent {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

// Function Component with React.memo
const MemoizedGreeting = React.memo(
  function Greeting({ name }) {
    return <h1>Hello, {name}</h1>;
  },
  (prevProps, nextProps) => {
    // Custom comparison function
    return prevProps.name === nextProps.name;
  }
);`
    },
    {
      id: 37,
      question: "37. How do you handle forms in React?",
      answer: "Forms in React can be handled using controlled components (where form data is controlled by state) or uncontrolled components (where form data is handled by the DOM).",
      codeExample: `// Controlled Form
function ControlledForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        value={formData.name}
        onChange={handleChange}
      />
      <input
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
}`
    },
    {
      id: 38,
      question: "38. What is one key benefit of using React?",
      answer: "React's component-based architecture allows developers to build encapsulated, reusable UI components that manage their own state. This modularity leads to better code organization, maintainability, and reusability.",
      codeExample: `// Reusable Button Component
function Button({ variant, onClick, children }) {
  return (
    <button 
      className={variant}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

// Using the Button component
function App() {
  return (
    <div>
      <Button 
        variant="primary"
        onClick={() => console.log('Primary clicked')}
      >
        Primary Button
      </Button>
      <Button 
        variant="secondary"
        onClick={() => console.log('Secondary clicked')}
      >
        Secondary Button
      </Button>
    </div>
  );
}`
    },
    {
      id: 39,
      question: "39. How do you test React components?",
      answer: "React components can be tested using tools like Jest for unit testing and React Testing Library for integration testing. You test component rendering, user interactions, and state updates.",
      codeExample: `// Component Testing Example
import { render, screen, fireEvent } from '@testing-library/react';

// Component to test
function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <span data-testid="count">{count}</span>
      <button onClick={() => setCount(c => c + 1)}>
        Increment
      </button>
    </div>
  );
}

// Test suite
describe('Counter', () => {
  test('renders initial count of 0', () => {
    render(<Counter />);
    expect(screen.getByTestId('count')).toHaveTextContent('0');
  });

  test('increments count when button is clicked', () => {
    render(<Counter />);
    fireEvent.click(screen.getByText('Increment'));
    expect(screen.getByTestId('count')).toHaveTextContent('1');
  });
});`
    },
    {
      id: 40,
      question: "40. What is the role of presentational and container components?",
      answer: "Presentational components focus on the UI and rendering, receiving data via props. Container components handle logic, data fetching, and state management. This separation improves code organization, testing, and maintainability.",
      codeExample: `// Presentational Component
function UserCard({ name, email, onEdit }) {
  return (
    <div className="card">
      <h2>{name}</h2>
      <p>{email}</p>
      <button onClick={onEdit}>Edit</button>
    </div>
  );
}

// Container Component
function UserContainer() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    fetchUserData().then(data => setUserData(data));
  }, []);

  return userData ? (
    <UserCard
      name={userData.name}
      email={userData.email}
      onEdit={() => console.log('Edit clicked')}
    />
  ) : <Loading />;
}`
    },
    {
      id: 41,
      question: "41. What is the difference between a library and a framework?",
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
      id: 42,
      question: "42. How do you call an API in ReactJS?",
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
      id: 43,
      question: "43. What is the difference between fetch() and axios?",
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
      id: 44,
      question: "44. How do you create a ReactJS project?",
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
      id: 45,
      question: "45. What is Vite?",
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
      id: 46,
      question: "46. What is the difference between .tsx and .js files?",
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
      id: 47,
      question: "47. What is useEffect in React?",
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
    }
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
