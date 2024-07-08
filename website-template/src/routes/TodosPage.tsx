import { useState, useEffect, useContext, useCallback } from 'react';
import Loading from '../components/Loading';
import { DataContext } from '../context/DataContext';
import ACTIONS from '../reducer/Actions';
import { ErrorType } from '../types/ErrorType';
import ErrorMessage from '../components/ErrorMessage';
import Todo from '../components/Todo';

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
      setLoading(true);
      setError({ isError: false, errorMsg: '' });
      loadTodos();
    }
  }, [loadTodos, state.todos]);

  const renderTodos = () => {
    return state.todos.map((todo) => {
      return (
        <Todo
          key={todo.id}
          userId={todo.userId}
          id={todo.id}
          title={todo.title}
          completed={todo.completed}
        />
      );
    });
  };

  return (
    <main>
      <section className="grid">
        {loading ? <Loading /> : null}
        {error.isError ? <ErrorMessage message={error.errorMsg} /> : null}
        {state.todos.length > 0 ? renderTodos() : null}
      </section>
    </main>
  );
};

export default TodosPage;
