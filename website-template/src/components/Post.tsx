import { PostType } from '../types/PostType';

const Post = ({ id, title, body, userId }: PostType) => {
  return (
    <article key={id} className="gridItem grid-s-span6 grid-xxl-span4">
      <h3>{title}</h3>
      <p>{body}</p>
      <p>
        <strong>User ID: {userId}</strong>
      </p>
    </article>
  );
};

export default Post;
