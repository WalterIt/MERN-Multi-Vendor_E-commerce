import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  isLoading: true,
};

export const productReducer = createReducer(initialState, {
  productCreateRequest: (state) => {
    state.isLoading = true;
  },
  productCreateSuccess: (state, action) => {
    state.isLoading = false;
    state.product = action.payload;
    state.success = true;
  },
  productCreateFailure: (state, action) => {
    state.isLoading = false;
    state.error = action?.payload;
    state.success = false;
  },
  ClearErrors: (state) => {
    state.error = null;
  },
});
