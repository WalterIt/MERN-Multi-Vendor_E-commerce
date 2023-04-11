import { createReducer } from "@reduxjs/toolkit";

// TODO: Replace createReducer

const initialState = {
  isAuthenticated: false,
};

// TODO: Implement Persistence of Data

export const userReducer = createReducer(initialState, {
  LoadUserRequest: (state) => {
    state.loading = true;
  },
  LoadUserSuccess: (state, action) => {
    state.isAuthenticated = true;
    state.loading = false;
    state.user = action.payload;
  },
  LoadUserFailure: (state, action) => {
    state.isAuthenticated = false;
    state.loading = false;
    state.error = action?.payload;
  },
  ClearErrors: (state) => {
    state.error = null;
  },
});
