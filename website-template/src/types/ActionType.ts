import { PhotoType } from './PhotoType';
import { PostType } from './PostType';
import { TodoType } from './TodoType';
import ACTIONS from '../reducer/Actions';

export type ActionType = {
  type: ACTIONS.SET_POSTS | ACTIONS.SET_PHOTOS | ACTIONS.SET_TODOS;
  payload: PhotoType[] | PostType[] | TodoType[];
};
