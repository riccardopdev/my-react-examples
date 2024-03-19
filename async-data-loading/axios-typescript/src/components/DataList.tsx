import { useState, useEffect } from 'react';
import axios from 'axios';

const url: string = 'http://jsonplaceholder.typicode.com/';
//dataType is used to reference which type of list and data needs to be rendered
let dataType: string = 'users';

type DataItem = {
  id: number;
};

type UserType = DataItem & {
  name: string;
  email: string;
};

type PostType = DataItem & {
  title: string;
  body: string;
};

type PhotoType = DataItem & {
  title: string;
  thumbnailUrl: string;
};

type DataArray = (UserType | PostType | PhotoType)[];

type ErrorType = {
  error: boolean;
  message: string;
};

const DataList = () => {
  const [data, setData] = useState<DataArray>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<ErrorType>({ error: false, message: '' });

  useEffect(() => {
    loadData('users');
  }, []);

  const loadData = async (dataEndpoint: string) => {
    //dataType is used to reference which type of list and data needs to be rendered
    dataType = dataEndpoint;

    //Reset the error and loading state before loading
    setError((prevState) => ({
      ...prevState,
      error: false,
      message: '',
    }));
    setLoading(true);

    console.log(data);

    await axios
      .get(url + dataEndpoint + '?_limit=10')
      .then((response) => {
        if (response.status === 200) {
          setError((prevState) => ({
            ...prevState,
            error: false,
            message: '',
          }));
          setLoading(false);
          setData(response.data);
        } else {
          return Promise.reject(response);
        }
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

  const renderDataList = () => {
    return data.map((item) => {
      switch (dataType) {
        case 'users':
          if ('name' in item && 'email' in item) {
            const user = item as UserType;
            return (
              <div key={user.id}>
                <p>Name: {user.name}</p>
                <p>Email: {user.email}</p>
                <hr />
              </div>
            );
          }
          break;
        case 'posts':
          if ('title' in item && 'body' in item) {
            const post = item as PostType;
            return (
              <div key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
                <hr />
              </div>
            );
          }
          break;
        case 'photos':
          if ('title' in item && 'thumbnailUrl' in item) {
            const photo = item as PhotoType;
            return (
              <div key={photo.id}>
                <h3>{photo.title}</h3>
                <img
                  width="150"
                  height="150"
                  alt={photo.title}
                  src={photo.thumbnailUrl}
                />
              </div>
            );
          }
          break;
        default:
          throw new Error('Wrong data type');
      }
    });
  };

  return (
    <section>
      <button onClick={() => loadData('users')}>Load users</button>
      <button onClick={() => loadData('posts')}>Load posts</button>
      <button onClick={() => loadData('photos')}>Load photos</button>
      <h1>List of {dataType}</h1>
      {loading === true ? <h2>Loading {dataType}...</h2> : null}
      {error.error === true ? <h2>{error.message}</h2> : null}
      {data.length > 0 ? renderDataList() : null}
    </section>
  );
};

export default DataList;
