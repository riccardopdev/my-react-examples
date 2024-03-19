# React's Context implementation with TypeScript

## Objective:

The objective of this project is to showcase the implementation of React Context in a React application using TypeScript. Specifically, the project will demonstrate how to manage and update two date objects (`today` and `selectedDate`) using React Context, along with the `setSelectedDate` state function to modify the `selectedDate` object.

The project showcases a user interface (UI) designed to display both the current date and a selected date. Additionally, it includes controls allowing users to adjust the day, month, and year of the selected date by incrementing or decrementing these values by 1.

## Components:

1. **DateContainer Component**:

- The `DateContainer` component serves as the provider of the Context.
- It manages the state of the two date objects (`today` and `selectedDate`).

2. **DateDisplay Component**:

- The `DateDisplay` component is a consumer of the Context.
- It displays the values of the two date objects (`today` and `selectedDate`).

3. **DateControls Component**:

- The `DateControls` component is another consumer of the Context.
- It provides controls to update the `selectedDate` object.

## Data Managed by Context:

- `today`: This represents the current date.
- `selectedDate`: This represents the date that has been selected by the user.
- `setSelectedDate`: This is the state function used to set new values for `selectedDate`.

## Functionality:

- The `DateContainer` component provides the Context to both the `DateDisplay` and `DateControls` components.
- The `DateDisplay` component utilizes the Context to display the values of `today` and `selectedDate`.
- The `DateControls` component utilizes the Context to update the value of `selectedDate`.

## Implementation Details:

- Ensure that the necessary dependencies for React, TypeScript, and any other required packages are installed.
- Create the `DateContainer`, `DateDisplay`, and `DateControls` components.
- Implement the **Context** provider and consumer logic within the `DateContainer` component.
- Utilize TypeScript for type safety and to define the types of the date objects.
- Test the functionality of the components to ensure proper interaction and state management.

## Usage:

This project is built with Vite.
To use this project, follow these steps:

1. Clone the repository to your local machine.
2. Install dependencies using `npm install`.
3. Run the project using `npm run dev`.
4. Open your web browser and navigate to the localhost url displayed in your terminal.

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
