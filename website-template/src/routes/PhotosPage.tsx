import { useEffect, useState, useContext, useCallback } from 'react';
import Loading from '../components/Loading';
import ErrorMessage from '../components/ErrorMessage';
import { DataContext } from '../context/DataContext';
import ACTIONS from './../reducer/Actions';
import { ErrorType } from '../types/ErrorType';
import Photo from '../components/Photo';

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
      setLoading(true);
      setError({ isError: false, errorMsg: '' });
      loadPhotos();
    }
  }, [loadPhotos, state.photos]);

  const renderPhotos = () => {
    return state.photos.map((photo) => {
      return (
        <Photo
          key={photo.id}
          albumId={photo.albumId}
          id={photo.id}
          title={photo.title}
          url={photo.url}
          thumbnailUrl={photo.thumbnailUrl}
        />
      );
    });
  };

  return (
    <main>
      <section className="grid">
        {loading ? <Loading message="Loading photos..." /> : null}
        {error.isError ? <ErrorMessage message={error.errorMsg} /> : null}
        {state.photos.length > 0 ? renderPhotos() : null}
      </section>
    </main>
  );
};

export default PhotosPage;
