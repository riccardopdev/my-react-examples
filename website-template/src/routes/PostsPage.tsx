import { useState, useEffect, useContext, useCallback } from 'react';
import { DataContext } from '../context/DataContext';
import ACTIONS from '../reducer/Actions';
import { ErrorType } from '../types/ErrorType';

const PostsPage = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<ErrorType>({
    isError: false,
    errorMsg: '',
  });
  const { state, dispatch } = useContext(DataContext);

  const loadPosts = useCallback(async () => {
    await fetch('https://jsonplaceholder.typicode.com/posts')
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
        dispatch({ type: ACTIONS.SET_POSTS, payload: data });
      })
      .catch((error) => {
        setLoading(false);
        setError({
          isError: true,
          errorMsg: error.status
            ? `Error loading data. Status code: ${error.status}`
            : error.toString(),
        });
      });
  }, [dispatch]);

  useEffect(() => {
    if (state.posts.length <= 0) {
      setLoading(true);
      setError({ isError: false, errorMsg: '' });
      loadPosts();
    }
  }, [loadPosts, state.posts]);

  const renderPosts = () => {
    return state.posts.map((post) => {
      return (
        <article key={post.id} className="gridItem grid-s-span6 grid-xxl-span4">
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </article>
      );
    });
  };

  return (
    <main>
      <section className="grid">
        {loading ? <p>Loading...</p> : null}
        {error.isError ? <p>{error.errorMsg}</p> : null}
        {state.posts.length > 0 ? renderPosts() : null}
      </section>
    </main>
  );
};

export default PostsPage;
