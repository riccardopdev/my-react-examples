# Async Data Loading Using Axios and TypeScript

## Objective:

The objective of this project is to demonstrate the implementation of asynchronous data loading in a React application using the `axios` library and TypeScript. The project utilizes three **jsonplaceholder** endpoints [http://jsonplaceholder.typicode.com/](http://jsonplaceholder.typicode.com/) (users, posts, photos) to retrieve an array of objects.

Specifically, this project showcases how to manage three different pieces of state and their corresponding state setters to track the loading progress and status of each endpoint:

- `data`: An array of objects (users, posts, photos).
- `loading`: A boolean value indicating whether data is being loaded.
- `error`: An object containing a boolean value and a string message to indicate if an error occurred during the loading process.

The `axios` library is utilized with the `then` and `catch` methods to manage and update these states.

## Components:

1. **DataList Component**:

- The `DataList` component serves as the main data loading component. It is responsible for displaying loading and error messages, as well as the list of users, posts, and photos.
- This component manages the state of `data`, `error`, and `loading`.

## Usage:

This project is built with Vite.
To use this project, follow these steps:

1. Clone the repository to your local machine.
2. Install dependencies using `npm install`.
3. Run the project using `npm run dev`.
4. Open your web browser and navigate to the localhost url displayed in your terminal.

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
