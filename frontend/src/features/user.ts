import { createSlice } from '@reduxjs/toolkit';

// declaring the types for our state
export type UserState = {
  isLogged: boolean;
  user: {
    id: number | null;
    name: string;
    email: string;
  };
  is_admin: boolean;
  token: string;
};

const initialState: UserState = {
  isLogged: false,
  user: {
    id: null,
    name: '',
    email: '',
  },
  is_admin: false,
  token: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state: UserState, action) => {
      state.isLogged = true;
      const { user, is_admin, token } = action.payload;
      state.user.id = user.id;
      state.user.name = user.name;
      state.user.email = user.email;
      state.is_admin = is_admin;
      state.token = token;
    },
    logout: (state: UserState) => {
      state.isLogged = false;
      state.user = initialState.user;
      state.is_admin = false;
      state.token = initialState.token;
    },
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
