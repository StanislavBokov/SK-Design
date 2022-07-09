import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { ModalState } from '../../types';

const initialState = {
  loading: false
};

export const SendDataReducer = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    isLoading: (state, action: PayloadAction<boolean>) => ({
      ...state, loading: action.payload
    })
  }
});
export const { isLoading } = SendDataReducer.actions;
export default SendDataReducer.reducer;