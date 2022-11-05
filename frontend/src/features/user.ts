import { createSlice } from '@reduxjs/toolkit';

// declaring the types for our state
export type UserState = {
  isLogged: boolean;
  user: {
    id: number | null;
    name: string;
    email: string;
  };
};

const initialState: UserState = {
  isLogged: false,
  user: {
    id: null,
    name: '',
    email: '',
  },
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state: UserState, action) => {
      state.isLogged = true;
      state.user.id = action.payload.id;
      state.user.name = action.payload.name;
      state.user.email = action.payload.email;
    },
    logout: (state: UserState) => {
      state.isLogged = false;
      state.user = initialState.user;
    },
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
