import { createSlice } from '@reduxjs/toolkit';

// declaring the types for our state
export type UserState = {
  isLogged: boolean;
  user: {
    id: number | null;
    name: string;
    email: string;
  };
  token: string;
};

const initialState: UserState = {
  isLogged: false,
  user: {
    id: null,
    name: '',
    email: '',
  },
  token: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state: UserState, action) => {
      state.isLogged = true;
      const { user, token } = action.payload;
      state.user.id = user.id;
      state.user.name = user.name;
      state.user.email = user.email;
      state.token = token;
    },
    logout: (state: UserState) => {
      state.isLogged = false;
      state.user = initialState.user;
      state.token = initialState.token;
    },
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
