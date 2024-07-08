const Loading = ({ message = 'Loading...' }: LoadingProps) => {
  return <h2>{message}</h2>;
};

type LoadingProps = {
  message?: string;
};

export default Loading;
