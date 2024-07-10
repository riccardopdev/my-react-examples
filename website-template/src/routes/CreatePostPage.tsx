import { FormEvent, useRef, useState } from 'react';
import Loading from '../components/Loading';
import ErrorMessage from '../components/ErrorMessage';
import { ErrorType } from '../types/ErrorType';

const CreatePostPage = () => {
  const postTitle = useRef<HTMLInputElement>(null);
  const postBody = useRef<HTMLTextAreaElement>(null);
  const postUserId = useRef<HTMLInputElement>(null);

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<ErrorType>({
    isError: false,
    errorMsg: '',
  });
  const [postCreated, setPostCreated] = useState<boolean>(false);

  const submitPost = (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();

    setLoading(true);
    setError({ isError: false, errorMsg: '' });
    setPostCreated(false);

    const newPostBody = {
      userId: postUserId.current?.value,
      title: postTitle.current?.value,
      body: postBody.current?.value,
    };

    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify(newPostBody),
    })
      .then((response) => {
        console.log('Response: ', response);

        if (response.status === 201) {
          return response.json();
        } else {
          return Promise.reject(response);
        }
      })
      .then((data) => {
        console.log('Data: ', data);

        setLoading(false);
        setError({ isError: false, errorMsg: '' });
        setPostCreated(true);
      })
      .catch((error) => {
        console.log('Error: ', error);

        setLoading(false);
        setError({
          isError: true,
          errorMsg: error.status
            ? `Error creating post. Status code: ${error.status}`
            : error.toString(),
        });
      });
  };

  return (
    <main>
      <section>
        <h1>Create new post</h1>
        <p>
          A page with a form to submit a new post to
          https://jsonplaceholder.typicode.com/posts.
        </p>
      </section>
      <section>
        <form onSubmit={submitPost}>
          <div>
            <label htmlFor="postTitle">Post Title</label>
            <input
              id="postTitle"
              type="text"
              ref={postTitle}
              defaultValue={'Title of the post'}
            ></input>
          </div>
          <div>
            <label htmlFor="postBody">Post Body</label>
            <textarea
              id="postBody"
              ref={postBody}
              defaultValue={'Some text for the post body.'}
            ></textarea>
          </div>
          <div>
            <label htmlFor="postUserId">User ID</label>
            <input
              id="postUserId"
              type="number"
              ref={postUserId}
              defaultValue={20}
            ></input>
          </div>
          <button type="submit">Submit Post</button>
        </form>
      </section>
      {loading ? <Loading message="Submitting post..." /> : null}
      {error.isError ? <ErrorMessage message={error.errorMsg} /> : null}
      {postCreated ? (
        <section>
          <h3>Post successfully created!</h3>
        </section>
      ) : null}
    </main>
  );
};

export default CreatePostPage;
