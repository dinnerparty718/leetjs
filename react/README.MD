# React

## Fragment

- `<></>`
- `<React.Fragment></React.Fragment>`

## Portal

- `import ReactDOM from 'react-dom';`
- resolve modal being nested in components
- shouldbe standalone and outsite the components

## Refs

- allow to reference to other doms
- `useRef()` connect js variables to dom elements
- can replace input two way bindings. remove `value` and `onChange` lisener, but need to reset the input value

## Controlled vs uncontrolled components

- In most cases, we recommend using controlled components to implement forms. In a controlled component, form data is handled by a React component. The alternative is uncontrolled components, where form data is handled by the DOM itself.
- To write an uncontrolled component, instead of writing an event handler for every state update, you can use a ref to get form values from the DOM

## (Side) Effects

- React Main Job: render UI, state, props. JSX, react to user input, re-evaluate component upon state/props changes
- Side Effect: everything else
  - Store Data in Browser Storage
  - Send Http Request ot backend Servers
  - set/manage Timers
  - tasks outside normal component function
  - form validation
- `useEffect() Hook`
- `useEffect(() => {...}, [dependencies]);`
- dependency arrays exception

  - state updating function setFormIsValid
  - built-in APIs fetch , localStorage
  - variables/functions defined outsite of your components
- Clean up
  
  - run before useEffect re-evaluate
  - comopnent was remove

## Reducers

- `useReducer()` can be used as a **replacement** for `useState()` if you need more powerful state management
- related states => update a state which depends on another states
- `const [state, dispatchFn] = useReducer(reducerFn, initialState, initFn);`
- update related states at the same time `emailState = {value:'', isValid: true}`;

  ```JavaScript
  const { someProperty } = someObject;
  useEffect(() => {
    // code that only uses someProperty ...
  }, [someProperty]);



  useEffect(() => {
    // code that only uses someProperty ...
  }, [someObject.someProperty]);
  ````

## Context

- chain of forwarding getting longer and longer, can use dymanic context to provide functions
- when to use: need to **forward** to grand children components
- limiations

  - not optimized for high frequency changes **use redux** instead

  ```javascript
  //context creation
  React.createContext({
  isLoggedIn: false,
  })


  // provide context
  <AuthContext.Provider>
    <div></div>
  </AuthContext.Provider>

  // consume context, 2 ways

  // 1. listener
  <AuthContext.Consumer>
  </AuthContext.Consumer>

  // 2. react hook (recommended way)
  const ctx = useContext(AuthContext);

  ```

## Rules of hooks

- must use hooks in 1. react component function or 2. custom hooks
- must use hooks at the top level, not nested or blocks
- useEffects, add all dependencies (except built-in API or state functions)

## Optimization

- Re-evaluating components != Re-rendering the DOM
- comparision components in memory, cheaper
- parent component is re-evaluated => all children components will be re-evaluated too
  
  - use `React.memo(component)` to opt-in child component update upon states update, avoid unnesssary reevaluation
  - comes with performance cost, re-evaluation vs state comparison
  - javascript primitive and reference values
  - use `useCallback` to store functions internally, also need dependency array
- is state re-creating each render cycle? **No** React make sure it only initialize once, react will update the state later
- state scheudling and batching
  
  - state changes are scheduled by React, does not happen instantly
  - use function form to update state which depends on **prevState**
  - two state update in the same function, react will batch them

- `useMemo()` memorize data `useCallback()` momorize function

## Custom of hooks

- why? reusing logic
- hard rule start with **use** eg. `useCounter`
- avoid infinit loop

  - wrap output custom function in useCallback
  - make sure any dependencies that pass in to custom function also wont change (useCallback)

## Forms

### when to validate

- when submitting the form
- when input field lose focus
- on every key stroke

  - warn user before he/she has the change to enter value
  - provide direct feedback when input is invalid
  - use state instead of ref to create controlled components
  - also need server validation besides browser/js validation **js validation is for user experience, not for security**

- use derived variables to check overall validity
- consider custom hook to reduce code duplication
- [formik](https://formik.org/)
  
## Redux (replacing Context) using Redux Toolkit

Redux is a state management for cross-component or app-wide state

### disavantages of context

- complex to setup: deeply nested JSX code and / or hange "context provider" components
- performance

### Core Redux Concepts

- Central Data (state) Store
- the Store notify the components, they get slice of the store
- components never direct manipulate the data, use **reducer** instead. different from `useReducer()`
- Components trigger/Dispatch **actions**
- **Never change existing state, always return new state** because object is reference value
- use redux toolkits `npm install @reduxjs/toolkit` can uninstall `redux` package
- with redux toolkits, we can directly modify the state
- Redux Toolkit's `createReducer` and `createSlice` automatically use Immer internally to let you write simpler immutable update logic using "mutating" syntax. This helps simplify most reducer implementations.

### Redux with Async Tasks (create action creators that returns an async function)

- Reducer must be pure, side-effect free, **synchronous** functions
- Where shjould side-effects and async tasks be executed? two places

  - inside the components (that redux does not know)
  - inside own action creators **Thunk**
  - a function that delays an action until later => return another function
  - an action create function that does NOT return the action itself but another function which eventually returns the action
  - `dispatch()` can accept object or a function

## Custom Hooks

## React Router

React Router (^6.8.0)
`npm install react-router-dom`

### Steps

- Define Routes (**Object based** vs JSX)
- Activate Router, load router

  ```js

  // app.js
  import { createBrowserRouter, RouterProvider } from "react-router-dom";

  const router = createBrowserRouter([
    { path: '/', element: <HomePage /> },
    { path: '/product', element: <ProductPage /> },
  ]);
  ```

- make sure we do have those routers and add navigations **Not sending HTTP request**

  ```js
  // home.js
  import { Link} from 'react-router-dom';

  const HomePage = () => {
    return <>
      <h1>My Home Page</h1>
      <p>Go to <Link to='/product'>The list of product</Link></p>
    </>;
  };

  ```

- Nested Routes

  ```js

  // Root.js
  import { Outlet } from 'react-router-dom';
  import MainNavigation from '../components/MainNavigations';

  const RootLayout = () => {
    return <>
      <MainNavigation />
      <Outlet />
    </>;
  };

  export default RootLayout;

  // app.js
  import { createBrowserRouter, RouterProvider } from "react-router-dom";
  import HomePage from './pages/Home';
  import ProductPage from './pages/Product';
  import RootLayout from './pages/Root';

  const router = createBrowserRouter([
    {
      path: '/', element: <RootLayout />,
    //  errorElement: <ErrorPage />
      children: [
        { path: '/', element: <HomePage /> },
        { path: '/product', element: <ProductPage /> },
      ]
    },

  ]);
  ```

- Default Error Page
- NavLink: `<NavLink to="/" className={({ isActive }) => isActive ? classes.active : undefined} end>Home</NavLink>`

  ```js
  import { NavLink } from 'react-router-dom';
  ```

- Navigate Programtically

  ```js
  import { Link, useNavigate } from 'react-router-dom';

  const HomePage = () => {
    const navigate = useNavigate(); // change routes

    // programatically navigate
    const navigateHandler = () =>{
      navigate('/product');
    }

    return <>
      <h1>My Home Page</h1>
      <p>Go to <Link to='/product'>The list of product</Link></p>
      <p><button onClick={navigateHandler}>Navigate</button></p>
    </>;
  };

  ```

- Dynamtic routes

  ```javascript
  // define dynamic routes
  // path: '/products/:productId'

  // get parameters
  import { useParams } from 'react-router-dom';

  const ProductDetailPage = () => {
    const params = useParams();

    return <>
      <h1>Product Details!</h1>
      <p>{params.productId}</p>
    </>;
  };

  ```

- Absolute vs Relative Routes

  - starting with `/` means absolute path, removing `/` to use relative paths
  - rules also apply to `<Link>` and `<NavLink>`
  - can set it relative to Route or URL
  
    ```js

    const ProductPage = () => {
      return <>
        <h1>The Products Page</h1>
        <ul>
          {PRODUCTS.map(p => <li key={p.id} >
            <Link to={`/products/${p.id}`}> {p.title} </Link>
            {/* <Link to={p.id}> {p.title} </Link> */}
          </li>)}

        </ul>
      </>;
    };

    ```

- Index Routes
  
    ```js
      { index: true, element: <HomePage /> },
    ```

- Route Order **Deos Not** Matter, react is smart enough

  ```js

  const router = createBrowserRouter([
    { path: '/', element: <HomePage /> },
    { path: '/events', element: <EventsPage /> },
    { path: '/events/:eventId', element: <EventDetailPage /> },
    { path: '/events/new', element: <NewEventPage /> },
  ])

  ```

- **Loader** Use React Router to load initial data (first fetch Data then render the component)
  
  - when the loader get executed? after when navigatings
  - How go get users some feedback? `useNavigation()` idle/loading/submitting

    ```js

    //index: true, element: <EventsPage />, loader: eventLoader

    // useLoaderData is also available in the child components, but not parent components
    import { useLoaderData, json } from 'react-router-dom';
    import EventsList from '../components/EventsList';

    function EventsPage() {

      const data = useLoaderData();
      if (data.isError) {
        return <p>{data.message}</p>
      }
      const events = data.events;
      return (
        <EventsList events={events} />

      );
    }

    export default EventsPage;

    // loader can get dynamic routes params
    export async function loader({ request, params }) {
      const response = await fetch('http://localhost:8080/events');

      if (!response.ok) {
        return json({ message: 'Could not fetch events' }, { status: 500 });
      } else {
        return response;
      }
    }


    // to share the same loader (view vs edit)

              // {
              //   path: ':eventId',
              //   id: 'event-detail',
              //   loader: eventDetailLoader,
              //   children: [
              //     { index: true, element: <EventDetailPage /> },
              //     { path: 'edit', element: <EditEventPage /> },
              //   ]
              // }

      import { useRouteLoaderData } from 'react-router-dom';

      import EventForm from '../components/EventForm';

      const EditEventPage = () => {
        const data = useRouteLoaderData('event-detail'); // passing id here
        const event = data.event;
        return <EventForm event={event} />;
      };

      export default EditEventPage;

      ```

  - Defer Loading, show whatever is available now

- **Action** use react router to submit data
  
  - Each inputs in form needs to have a **name** attribute
  - `form` to `Form`

  ```html

    <Form method='post' action='any-other-path-action'></Form>
  ```

  - to submit from programatically `const submit = useSubmit();`
  - to Check Routes status `const navigation = useNavigation()`

  ```js

  const isSubmitting =  navigation.state === 'submitting';

  ```

- **useFetcher()** will not trigger route action/loader and don't **transition** to a different route

  ```js

  import { Suspense } from 'react';
  import { useLoaderData, json, defer, Await } from 'react-router-dom';
  import EventsList from '../components/EventsList';


  async function loadEvents() {
    const response = await fetch('http://localhost:8080/events');

    console.log(response);

    if (!response.ok) {
      return json({ message: 'Could not fetch events' }, { status: 500 });
    } else {
      const resData = await response.json();
      return resData.events;
    }
  }


  function EventsPage() {
    const { events } = useLoaderData();
    return (
      <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
        <Await resolve={events}>
          {(loadedEvents) => <EventsList events={loadedEvents} />}
        </Await>
      </Suspense>

    );
  }

  export default EventsPage;


  export function loader() {
    return defer({
      events: loadEvents() // return a promise
    })
  }

  ```
  
- multiple action with different speed

## Typescript

- **superset** of javascript, adds static type to js

### Basic Types
