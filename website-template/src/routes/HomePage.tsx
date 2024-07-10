import usePageTracking from '../hooks/GA4/usePageTracking';

const HomePage = () => {
  usePageTracking('Home Page');

  return (
    <main>
      <section>
        <h1>Website Template</h1>
        <p>
          The objective of this project is to demonstrate one of many{' '}
          <strong>typical setup for a React website</strong> using{' '}
          <code>react-router-dom</code> to manage routes, and a combination of
          React's <code>reducer</code> and <code>context</code> API to manage
          the state.
        </p>
        <p>The website uses the JSONPlaceholder API to handle data requests.</p>
        <p>
          Styling is implemented using CSS modules for each component, as well
          as a global CSS reset, common styles, and CSS variables.
        </p>
      </section>
      <section>
        <h2>Features:</h2>
        <ul>
          <li>
            <p>TypeScript.</p>
          </li>
          <li>
            <p>React Router Dom using the Data API.</p>
          </li>
          <li>
            <p>React Reducer and Context for state management.</p>
          </li>
          <li>
            <p>
              Google Analytics GA4: Integration with GA4, including a
              usePageTracking hook (requires replacing the GA code in
              index.html).
            </p>
          </li>
          <li>
            <p>CSS Modules: Modular and scoped CSS for components.</p>
          </li>
          <li>
            <p>
              Global CSS: Includes reset rules, common rules, and variables.
            </p>
          </li>
        </ul>
      </section>
      <section>
        <h2>Folder structure:</h2>
        <ul>
          <li>
            <h3>components</h3>
            <p>
              Contains and organizes all React components created for the
              website.
            </p>
          </li>
          <li>
            <h3>context</h3>
            <p>
              Contains the <code>DataContext</code> file, which, in combination
              with the reducer, provides <code>state</code> and{' '}
              <code>dispatch</code> to the application to manage and consume
              state data.
            </p>
          </li>
          <li>
            <h3>reducer</h3>
            <p>
              Contains the <code>reducer</code> and <code>actions</code> used to
              modify and update the state.
            </p>
          </li>
          <li>
            <h3>routes</h3>
            <p>Contains all the routes (pages) featured in the website.</p>
          </li>
          <li>
            <h3>state</h3>
            <p>Contains the initial application's state.</p>
          </li>
          <li>
            <h3>types</h3>
            <p>
              Contains all the TypeScript types utilized in different parts of
              the application.
            </p>
          </li>
        </ul>
      </section>
      <section>
        <h2>Usage</h2>
        <p>
          This project is built with <strong>Vite</strong>.
        </p>
        <p>To use this project, follow these steps:</p>
        <ol>
          <li>
            <p>Clone the repository to your local machine.</p>
          </li>
          <li>
            <p>
              Install dependencies using <code>npm install</code>.
            </p>
          </li>
          <li>
            <p>
              Run the project using <code>npm run dev</code>.
            </p>
          </li>
          <li>
            <p>
              Open your web browser and navigate to the localhost url displayed
              in your terminal.
            </p>
          </li>
        </ol>
      </section>
    </main>
  );
};

export default HomePage;
