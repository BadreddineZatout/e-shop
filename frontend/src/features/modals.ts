import { createSlice } from '@reduxjs/toolkit';

// declaring the types for our state
export type ModalState = {
  showLogin: boolean;
  showRegister: boolean;
};

const initialState: ModalState = {
  showLogin: false,
  showRegister: false,
};

export const modalsSlice = createSlice({
  name: 'modals',
  initialState,
  reducers: {
    toggleLoginModal: (state) => {
      state.showLogin = !state.showLogin;
    },
    toggleRegisterModal: (state) => {
      state.showRegister = !state.showRegister;
    },
  },
});

export const { toggleLoginModal, toggleRegisterModal } = modalsSlice.actions;

export default modalsSlice.reducer;
