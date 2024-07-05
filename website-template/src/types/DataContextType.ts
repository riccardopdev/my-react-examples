import { ActionType } from './ActionType';
import { DataType } from './DataType';

export type DataContextType = {
  state: DataType;
  dispatch: React.Dispatch<ActionType>;
};
