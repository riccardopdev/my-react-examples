import { TodoType } from '../types/TodoType';

const Todo = ({ userId, id, title, completed }: TodoType) => {
  return (
    <article className="gridItem grid-s-span6 grid-xxl-span4">
      <h3>{title}</h3>
      <p>
        <strong>ID: {id}.</strong>
      </p>
      <p>{completed ? 'Completed' : 'Need action'}</p>
      <p>
        <strong>User ID: {userId}.</strong>
      </p>
    </article>
  );
};

export default Todo;
