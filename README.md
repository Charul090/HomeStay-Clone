React Project Template
Folder structure:

├── /build/                    # compiled output

├── /docs/                     # Documentation files

├── /node_modules/             # 3rd party lib

├── /public/                   # Static files 

├── /src/                      # The source code of the application

├───── /components/            # React components

├──────├──────/Login           # Login

├──────├──────/listing         # search components

├──────├──────/Entity          # Specific component

├──────├──────/news            # news specific components

├────── redux/                 # redux (Seperate into sub folders based on functions as well as complexity rises)

├──────├──────/actions         # action types, action creators

├──────├──────/reducers        # reducers

├──────├──────store.js         # store.js

├────── /routes/               # Routes/Page files

├────── /clientScript.js       # Client-side startup script

├────── /config.js             # application settings

├──────  ...                   

├── package.json       


Instructions

    Install the necessary dependencies.

npm install

    To start the development server, execute the following command.

npm start

    To start the production build, execute the following command.

npm run build

Dependencies

    Axios
    React Redux
    React Router DOM
    Redux
    Redux Thunk


Using Redux

A typical redux setup should have the following files in their respective folder.

    actionsTypes.js, to declare your different actions in redux. Like this.

    actions.js, to write your actions. Like this.

    reducer.js, to manage your reducer's state. Like this.

Once it's done, you've to import the reducer to store.js and use it in the combineReducers.

Note: Redux DevTools is already setup for development and production. You can download the extension for your browser.
Using React Hooks

Refer the detailed documentation.
React Router DOM with Hooks


Refer the detailed documentation.
Useful Visual Studio Code Extensions

    ES7 React/Redux/GraphQL/React-Native snippets


Using oAuth

Refer the detailed documentation
General Guidelines

    All the files having JSX should have an extension of .jsx

    Always de-structure your state & props before using them. Refer to MDN for reference.

    Async updates to redux must be handled through redux-thunk.

    Individual components should be styled using css modules. Refer to CRA Docs for reference.

    Always handle error in promises with catch method.

    Naming Conventions

