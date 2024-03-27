# Async Data Loading Using Fetch and Redux

## Objective:

The objective of this project is to demonstrate the implementation of asynchronous data loading in a React application using the `fetch` API and the `Redux` library for state management. The project utilizes three jsonplaceholder endpoints [http://jsonplaceholder.typicode.com/](http://jsonplaceholder.typicode.com/) (users, posts, photos) to retrieve an array of objects.

Specifically, this project showcases how to manage three different pieces of state using `Redux` and corresponding actions to track loading progress and status for each endpoint:

- `data`: An array of objects (users, posts, photos).
- `loading`: A boolean value indicating whether data is being loaded.
- `error`: An object containing a boolean value and a string message to indicate if an error occurred during the loading process.

The JavaScript `fetch` API is utilized with the `then` and `catch` methods to `dispatch` actions and manage and update these states.

## Components:

1. **DataList Component**:

- The `DataList` component serves as the main data loading component. It is responsible for displaying loading and error messages, as well as the list of users, posts, and photos.
- This component is responsible to `dispatch` the actions to manage the state of `data`, `error`, and `loading`.

2. **Redux Store**:

The `Redux` **store** setup includes:

- The `index.js` file which exports the **store** and **actions** used to manage the state.
- The `fetchDataSlice.js` file which creates the `Redux` slice `loadingState` declaring the initial state as well generating the reducers and actions to manage the state.
- The **store** is made available to the application in the `App.jsx` file using the `Redux` `Provider`.

## Usage:

This project is built with Vite.
To use this project, follow these steps:

1. Clone the repository to your local machine.
2. Install dependencies using `npm install`.
3. Run the project using `npm run dev`.
4. Open your web browser and navigate to the localhost url displayed in your terminal.

Additionally, you can use the Redux DevTools extension to monitor state changes and debug the application's state management.

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
