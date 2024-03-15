import { useState, useEffect } from 'react';

const usersUrl: string = 'http://jsonplaceholder.typicode.com/users';

type UserType = {
  id: number;
  name: string;
  email: string;
};

type ErrorType = {
  error: boolean;
  message: string;
};

const DataList = () => {
  const [data, setData] = useState<UserType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<ErrorType>({ error: false, message: '' });

  useEffect(() => {
    setLoading(true);
    loadData();
  }, []);

  const loadData = async () => {
    await fetch(usersUrl)
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else {
          return Promise.reject(response);
        }
      })
      .then((data) => {
        setError((prevState) => ({ ...prevState, error: false, message: '' }));
        setLoading(false);
        setData(data);
      })
      .catch((error) => {
        setError((prevState) => ({
          ...prevState,
          error: true,
          message: error.status
            ? `Error loading data. Status code ${error.status}`
            : error.toString(),
        }));
        setLoading(false);
        setData([]);
      });
  };

  const renderUserList = () => {
    return data.map((user) => {
      return (
        <li key={user.id}>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <hr />
        </li>
      );
    });
  };

  return (
    <section>
      <h1>List of users</h1>
      {loading === true ? <h2>Loading users...</h2> : null}
      {error.error === true ? <h2>{error.message}</h2> : null}
      {data.length > 0 ? <ul>{renderUserList()}</ul> : null}
    </section>
  );
};

export default DataList;
