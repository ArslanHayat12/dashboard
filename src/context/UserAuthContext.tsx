import React, { createContext, Dispatch, useContext, useReducer } from 'react';

export type UserState = {
  user: any;
};

export type Action = {
  type: 'SET_USER';
  payload: any;
};

export const SET_USER = 'SET_USER';

const initialState = {
  state: {
    user: null,
  },
  dispatch: () => undefined,
};

export type UserContext = {
  state: UserState;
  dispatch: Dispatch<Action>;
};
const UserAuthContext = createContext<UserContext>(initialState);

const reducer = (state: UserState, action: Action) => {
  switch (action.type) {
    case 'SET_USER':
      return { ...state, user: action.payload };
    default:
      return state;
  }
};

const UserAuthProvider = (props: any) => {
  const [state, dispatch]: any = useReducer<any>(reducer, initialState);

  return (
    <UserAuthContext.Provider value={{ state, dispatch }}>
      {props.children}
    </UserAuthContext.Provider>
  );
};

const useUserContext = () => useContext(UserAuthContext);
export { UserAuthProvider, useUserContext };