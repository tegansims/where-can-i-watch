import { combineReducers } from "redux"
import { SearchReducer } from "../features/search"

export default combineReducers({
  search: SearchReducer
})
