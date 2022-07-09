import { takeLatest, put, delay } from 'typed-redux-saga';
import actionType from '../actionType';
import { sendDataAction } from '../action';
import { isLoading } from '../reducer';

export function* sendDataField({ payload }: ReturnType<typeof sendDataAction>) {
  try {
    yield put(isLoading(true));
    yield delay(2000);
    console.log(JSON.stringify(payload)); // RESULT
    yield put(isLoading(false));
  } catch (err) {
    console.error(err);
  }
}

export default function* listener() {
  yield takeLatest(actionType.SEND_DATA, sendDataField);

}
