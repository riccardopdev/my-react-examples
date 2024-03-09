# React's Context and Reducer implementation with TypeScript

## Objective:

The objective of this project is to demonstrate the integration of React **Context** and **Reducer** in a React application using **TypeScript**. Specifically, the project showcases how to manage `state` and update a date object (`selectedDate`) using React Reducer provided by React Context.

The React Reducer facilitates `state` management and updates through the `dispatch` method, which is accessible via React Context.

The project showcases a user interface (UI) designed to display both the current date and a selected date. Additionally, it includes controls allowing users to adjust the day, month, and year of the selected date by incrementing or decrementing these values by 1.

## Components:

1. **DateContainer Component**:

- The `DateContainer` component serves as both the provider of the Context and implementation of the Reducer.

2. **DateDisplay Component**:

- The `DateDisplay` component consumes the Context to display the values of the `today` and `selectedDate` date objects.

3. **DateControls Component**:

- The `DateControls` component consumes the Context and provides controls to update the `selectedDate` object using the Reducer's `dispatch` method.

## Data Managed by state:

- `today`: This represents the current date.
- `selectedDate`: This represents the date that has been selected by the user.

## Functionality:

- The `DateContainer` component implements the Reducer and provides the Context to both the `DateDisplay` and `DateControls` components.
- The `DateDisplay` component utilizes the Context to display the values of `today` and `selectedDate`.
- The `DateControls` component utilizes the Reducer's `dispatch` method for updating the `selectedDate`.

## Implementation Details:

- Ensure that the necessary dependencies for React, TypeScript, and any other required packages are installed.
- Create the `DateContainer`, `DateDisplay`, and `DateControls` components.
- Implement the **Reducer** to manage the `state`.
- Implement the **Context** provider and consumer logic within the `DateContainer` component.
- Utilize TypeScript for type safety and to define the types of the date objects.
- Test the functionality of the components to ensure proper interaction and state management.

## React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

### Expanding the ESLint configuration

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
