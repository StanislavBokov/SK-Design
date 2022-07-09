import { createAction } from '@reduxjs/toolkit';
import actionType from './actionType';
import { Data } from './actionType';

export const sendDataAction = createAction<Data>(actionType.SEND_DATA);