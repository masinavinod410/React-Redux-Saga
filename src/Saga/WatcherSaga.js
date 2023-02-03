//import { call, put, takeEvery, takeLatest } from "redux-saga/effects";

import { take, call, put } from "redux-saga/effects";
import { setOrdersData, setUserInfo } from "../Redux/Actions/action";
import { getOrdersData } from "../Services/OrderService";

export default function* flowSaga() {
  console.log(" watcher Saga called");
  yield take(setUserInfo);
  yield take(setOrdersData);
  yield call(fetchOrdersSaga);
}

function* fetchOrdersSaga() {
  const res = yield call(getOrdersData);
  yield put(setOrdersData(res));
  console.log("res--->>", res);
}

// function* loginSaga() {
//   const res = yield call(getOrdersData);
//   yield put(setOrdersData(res));
//   console.log("res--->>", res);
// }
