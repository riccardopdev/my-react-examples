import { DataType } from '../types/DataType';
import { ActionType } from '../types/ActionType';
import ACTIONS from './Actions';
import { PostType } from '../types/PostType';
import { PhotoType } from '../types/PhotoType';
import { TodoType } from '../types/TodoType';

const reducer = (state: DataType, action: ActionType): DataType => {
  switch (action.type) {
    case ACTIONS.SET_POSTS:
      return {
        posts: action.payload as PostType[],
        photos: state.photos,
        todos: state.todos,
      };
    case ACTIONS.SET_PHOTOS:
      return {
        posts: state.posts,
        photos: action.payload as PhotoType[],
        todos: state.todos,
      };
    case ACTIONS.SET_TODOS:
      return {
        posts: state.posts,
        photos: state.photos,
        todos: action.payload as TodoType[],
      };
    default:
      return state;
  }
};

export default reducer;
