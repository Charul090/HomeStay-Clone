# Home Stay Clone

## Folder structure:

```
├── /build/                     # compiled output
├── /docs/                      # Documentation files
├── /node_modules/              # 3rd party lib
├── /public/                    # Static files 
├── /src/                       # The source code of the application
├───── /components/            # React components
├──────├──────/LoginModal      # Login
├──────├──────/listing         # search bar/filters 
├──────├──────/entity          # Entity page
├────── redux/                 # redux (Seperate into sub folders based on functions as well as complexity rises)
├──────├──────/actions         # action types, action creators
├──────├──────/reducers        # reducers
├──────├──────store.js         # store.js
├────── /routes/               # Routes/Page files
├──────  ...                   
├── package.json                         
```

## Instructions

1. Install the necessary dependencies.

```
npm install
```

2. To start the development server, execute the following command.

```
npm start
```

3. To start the production build, execute the following command.

```
npm run build
```

## Dependencies

- [Axios](https://github.com/axios/axios)
- [React Redux](https://github.com/reduxjs/react-redux)
- [React Router DOM](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom)
- [Redux](https://github.com/reduxjs/redux)
- [Redux Thunk](https://github.com/reduxjs/redux-thunk)



## Using Redux

A typical redux setup should have the following files in their respective folder.

1. `actionsTypes.js`, to declare your different actions in redux. Like [this](src/redux/authentication/actionTypes.js).

2. `actions.js`, to write your actions. Like [this](src/redux/authentication/actions.js).

3. `reducer.js`, to manage your reducer's state. Like [this](src/redux/authentication/reducer.js).

Once it's done, you've to import the reducer to `store.js` and use it in the `combineReducers`.

Note: `Redux DevTools` is already setup for development and production. You can download the extension for your browser.

## Using React Hooks

Refer the detailed [documentation](https://reactjs.org/docs/hooks-intro.html).

### React Router DOM with Hooks

Refer the detailed [documentation](https://reacttraining.com/react-router/web/api/Hooks).


## Useful Visual Studio Code Extensions

- [ES7 React/Redux/GraphQL/React-Native snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets)

## Using oAuth

Refer the detailed [documentation](src/client/docs/authentication.md)

## General Guidelines

1. All the files having JSX should have an extension of `.jsx`

2. Always de-structure your state & props before using them. Refer to [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) for reference.

3. Async updates to redux must be handled through redux-thunk.

4. Individual components should be styled using `css modules`. Refer to [CRA Docs](https://create-react-app.dev/docs/adding-a-css-modules-stylesheet/) for reference.

5. [Naming Conventions](src/client/docs/naming.md)

