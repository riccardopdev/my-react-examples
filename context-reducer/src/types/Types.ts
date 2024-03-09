export type ActionType = {
  type: 'updateDay' | 'updateMonth' | 'updateYear';
  payload: number;
};

export type DateStateType = {
  today: Date;
  selectedDate: Date;
};

export type DateContextType = {
  state: DateStateType;
  dispatch: React.Dispatch<ActionType>;
};
