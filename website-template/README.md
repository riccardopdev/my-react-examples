# Website Template

## Objective:

The objective of this project is to demonstrate one of many typical setup for a React website using react-router-dom to manage routes, and a combination of React's reducer and context API to manage the state. The website uses the JSONPlaceholder API to handle data requests. Styling is implemented using CSS modules for each component, as well as a global CSS reset, common styles, and CSS variables.

## Folder structure:

1. **components**:

- Contains and organizes all React components created for the website.

2. **context**:

- Contains the `DataContext` file, which, in combination with the reducer, provides `state` and `dispatch` to the application to manage and consume state data.

3. **reducer**:

- Contains the reducer and actions used to modify and update the state.

4. **routes**:

- Contains all the routes (pages) featured in the website.

5. **state**:

- Contains the initial application's state.

6. **types**:

- Contains all the TypeScript types utilized in different parts of the application.

## Data Managed by state:

For this particular example, data is fetched from the JSONPlaceholder API.
The endpoints and data fetched are:

- `posts`: Dummy data used to populate the posts page.
- `photos`: Dummmy data used to populate the photos page.
- `todos`: Dummy data used to populate the todos page.

## Functionality:

- The website features a main navigation and several pages.
- The user can navigate the different pages through the main navigation bar.
- Some pages fetch their data from the JSONplaceholder API.
- The **Create New Post** page features a form that can be used to submit a request to create a new post to the JSONplaceholder API.

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
