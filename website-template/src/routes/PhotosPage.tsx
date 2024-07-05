import { useEffect, useState, useContext, useCallback } from 'react';
import { ErrorType } from '../types/ErrorType';
import { DataContext } from '../context/DataContext';
import ACTIONS from './../reducer/Actions';

const PhotosPage = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<ErrorType>({
    isError: false,
    errorMsg: '',
  });
  const { state, dispatch } = useContext(DataContext);

  const loadPhotos = useCallback(async () => {
    await fetch('https://jsonplaceholder.typicode.com/photos?_limit=10')
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else {
          return Promise.reject(response);
        }
      })
      .then((data) => {
        setLoading(false);
        setError({ isError: false, errorMsg: '' });
        dispatch({ type: ACTIONS.SET_PHOTOS, payload: data });
      })
      .catch((error) => {
        setLoading(false);
        setError({
          isError: true,
          errorMsg: error.status
            ? `Error loading data. Status code ${error.status}`
            : error.toString(),
        });
      });
  }, [dispatch]);

  useEffect(() => {
    if (state.photos.length <= 0) {
      loadPhotos();
    }
  }, [loadPhotos, state.photos]);

  const renderPhotos = () => {
    return state.photos.map((photo) => {
      return (
        <article
          key={photo.id}
          className="gridItem grid-s-span6 grid-xxl-span4"
        >
          <h2>{photo.title}</h2>
          <img src={photo.thumbnailUrl} alt={photo.title} />
        </article>
      );
    });
  };

  return (
    <main>
      <section className="grid">
        {loading ? <p>Loading...</p> : null}
        {error.isError ? <p>{error.errorMsg}</p> : null}
        {state.photos.length > 0 ? renderPhotos() : null}
      </section>
    </main>
  );
};

export default PhotosPage;
