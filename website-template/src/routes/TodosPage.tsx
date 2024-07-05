import { useState, useEffect, useContext, useCallback } from 'react';
import { ErrorType } from '../types/ErrorType';
import { DataContext } from '../context/DataContext';
import ACTIONS from '../reducer/Actions';

const TodosPage = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<ErrorType>({
    isError: false,
    errorMsg: '',
  });
  const { state, dispatch } = useContext(DataContext);

  const loadTodos = useCallback(async () => {
    await fetch('https://jsonplaceholder.typicode.com/todos')
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
        dispatch({ type: ACTIONS.SET_TODOS, payload: data });
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
    if (state.todos.length <= 0) {
      loadTodos();
    }
  }, [loadTodos, state.todos]);

  const renderTodos = () => {
    return state.todos.map((todo) => {
      return (
        <article className="gridItem grid-s-span6 grid-xxl-span4">
          <h2>{todo.title}</h2>
          <p>{todo.completed ? 'Completed' : 'Need action'}</p>
        </article>
      );
    });
  };

  return (
    <main>
      <section className="grid">
        {loading ? <p>Loading...</p> : null}
        {error.isError ? <p>{error.errorMsg}</p> : null}
        {state.todos.length > 0 ? renderTodos() : null}
      </section>
    </main>
  );
};

export default TodosPage;
