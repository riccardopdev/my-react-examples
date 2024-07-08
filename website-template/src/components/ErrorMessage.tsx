const ErrorMessage = ({
  title = 'Error',
  message = 'Something went wrong',
}: ErrorMessageProp) => {
  return (
    <section>
      <h3>{title}</h3>
      <pre>{message}</pre>
    </section>
  );
};

type ErrorMessageProp = {
  title?: string;
  message?: string;
};

export default ErrorMessage;
