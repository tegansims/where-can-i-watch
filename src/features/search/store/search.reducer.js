import { types } from "./search.actions"

export const initialState = {
  isLoading: false,
  hasError: false,
  searchResults: []
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SEARCH:
      return {
        ...state,
        isLoading: true, 
        hasError: false
      }

    case types.SEARCH_SUCCESS:
      return {
        ...state,
        searchResults: action.payload,
        isLoading: false, 
        hasError: false
      }

    case types.SEARCH_FAIL:
      return { ...state, isLoading: false, searchResults: [], hasError: true }
    default:
      return state
  }
}

