import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  const error = useRouteError() as Error;

  return (
    <main>
      <section>
        <h1>Error - Something went wrong!</h1>
        <pre>{error.message}</pre>
        <pre>{error.stack}</pre>
      </section>
    </main>
  );
};

export default ErrorPage;
