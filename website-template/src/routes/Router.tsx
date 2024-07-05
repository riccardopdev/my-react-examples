import { createBrowserRouter } from 'react-router-dom';
import Layout from './Layout';
import HomePage from './HomePage';
import PostsPage from './PostsPage';
import PhotosPage from './PhotosPage';
import TodosPage from './TodosPage';
import CreatePost from './CreatePost';

const Router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/posts', element: <PostsPage /> },
      { path: '/photos', element: <PhotosPage /> },
      { path: '/todos', element: <TodosPage /> },
      { path: '/createpost', element: <CreatePost /> },
    ],
  },
]);

export default Router;
