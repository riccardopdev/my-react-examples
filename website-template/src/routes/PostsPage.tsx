import { useState, useEffect, useContext, useCallback } from 'react';
import Loading from '../components/Loading';
import ErrorMessage from '../components/ErrorMessage';
import Post from '../components/Post';
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
        <Post
          key={post.id}
          id={post.id}
          title={post.title}
          body={post.body}
          userId={post.userId}
        />
      );
    });
  };

  return (
    <main>
      <section className="grid">
        {loading ? <Loading message="Loading posts..." /> : null}
        {error.isError ? <ErrorMessage message={error.errorMsg} /> : null}
        {state.posts.length > 0 ? renderPosts() : null}
      </section>
    </main>
  );
};

export default PostsPage;
