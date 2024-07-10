import { createBrowserRouter } from 'react-router-dom';
import Layout from './Layout';
import HomePage from './HomePage';
import PostsPage from './PostsPage';
import PhotosPage from './PhotosPage';
import TodosPage from './TodosPage';
import CreatePostPage from './CreatePostPage';
import ErrorPage from './ErrorPage';
import NotFoundPage from './NotFoundPage';

const Router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { errorElement: <ErrorPage /> },
      { path: '/', element: <HomePage /> },
      { path: '/posts', element: <PostsPage /> },
      { path: '/photos', element: <PhotosPage /> },
      { path: '/todos', element: <TodosPage /> },
      { path: '/createpost', element: <CreatePostPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
]);

export default Router;
