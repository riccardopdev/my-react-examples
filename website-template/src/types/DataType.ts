import { PostType } from './PostType';
import { PhotoType } from './PhotoType';
import { TodoType } from './TodoType';

export type DataType = {
  posts: PostType[];
  photos: PhotoType[];
  todos: TodoType[];
};
