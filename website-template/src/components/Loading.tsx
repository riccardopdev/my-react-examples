const Loading = ({ message = 'Loading...' }: LoadingProps) => {
  return (
    <section>
      <h3>{message}</h3>
    </section>
  );
};

type LoadingProps = {
  message?: string;
};

export default Loading;
