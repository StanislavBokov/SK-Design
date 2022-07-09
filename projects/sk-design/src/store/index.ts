
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import sendData from './form/saga/sendData';
import SendDataReducer from './form/reducer';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    field: SendDataReducer
    // modal: ModalReducer,
    // register: RegisterReducer,
    // signIn: signInReducer,
    // coffee: CoffeeReducer
  },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  middleware: (getDefaultMiddleware: any) => getDefaultMiddleware({
    serializableCheck: {
      // ignoredActions: [actionTypes.CONNECT_TO_METAMASK]
    }
  }).concat(sagaMiddleware)
});
sagaMiddleware.run(sendData);

export default store;