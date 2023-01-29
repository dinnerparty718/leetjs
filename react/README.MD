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
