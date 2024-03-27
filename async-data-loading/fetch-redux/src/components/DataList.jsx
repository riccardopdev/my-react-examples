import { useSelector, useDispatch } from 'react-redux';
import { fetchDataActions } from '../store';
import { useEffect, useCallback } from 'react';

const url = 'http://jsonplaceholder.typicode.com/';
let dataType = 'users';

const DataList = () => {
  const state = useSelector((state) => state.loadingState);
  const dispatch = useDispatch();

  const loadData = useCallback(
    async (dataEndpoint) => {
      dataType = dataEndpoint;

      dispatch(fetchDataActions.loadData());

      await fetch(url + dataEndpoint + '?_limit=10')
        .then((response) => {
          if (response.status === 200) {
            return response.json();
          } else {
            return Promise.reject(response);
          }
        })
        .then((data) => {
          dispatch(fetchDataActions.storeData(data));
        })
        .catch((error) => {
          let errorMessage = error.status
            ? `Error loading data. Status code: ${error.status}`
            : error.toString();
          dispatch(fetchDataActions.createError(errorMessage));
        });
    },
    [dispatch]
  );

  useEffect(() => {
    loadData(dataType);
  }, [loadData]);

  const renderDataList = () => {
    return state.data.map((item) => {
      switch (dataType) {
        case 'users':
          return (
            <div key={item.id}>
              <p>Name: {item.name}</p>
              <p>Email: {item.email}</p>
              <hr />
            </div>
          );
        case 'posts':
          return (
            <div key={item.id}>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
              <hr />
            </div>
          );
        case 'photos':
          return (
            <div key={item.id}>
              <h3>{item.title}</h3>
              <img
                width="150"
                height="150"
                alt={item.title}
                src={item.thumbnailUrl}
              />
            </div>
          );
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
      {state.loadingData === true ? <h2>Loading {dataType}...</h2> : null}
      {state.error.error === true ? <h2>{state.error.message}</h2> : null}
      {state.data.length > 0 ? renderDataList() : null}
    </section>
  );
};

export default DataList;
