import usePageTracking from '../hooks/GA4/usePageTracking';

const NotFoundPage = () => {
  usePageTracking('Not Found Page');

  return (
    <main>
      <section>
        <h1>404: Page not found</h1>
      </section>
    </main>
  );
};

export default NotFoundPage;
