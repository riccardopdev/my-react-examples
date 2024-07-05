import { FormEvent, useRef } from 'react';

const CreatePost = () => {
  const postTitle = useRef<HTMLInputElement>(null);
  const postBody = useRef<HTMLTextAreaElement>(null);

  const submitPost = (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();

    const newPostBody = {
      userId: 1,
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
        return response.json();
      })
      .then((data) => {
        console.log('Data: ', data);
      })
      .catch((error) => {
        console.log('Error: ', error);
      });
  };

  return (
    <main>
      <h2>Create new post</h2>
      <form onSubmit={submitPost}>
        <div>
          <label htmlFor="postTitle">Post Title</label>
          <input id="postTitle" type="text" ref={postTitle}></input>
        </div>
        <div>
          <label htmlFor="postBody">Post Body</label>
          <textarea id="postBody" ref={postBody}></textarea>
        </div>
        <button>Submit Post</button>
      </form>
    </main>
  );
};

export default CreatePost;
