import { spawn } from "redux-saga/effects"
import { SearchSaga } from "../features/search"

export default function* rootSaga() {
  yield spawn(SearchSaga)
}
