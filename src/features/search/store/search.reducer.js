import { types } from "./search.actions"

export const initialState = {
  isLoading: false,
  hasError: false,
  searchResults: [],
  details: []
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SEARCH:
    case types.LOAD_DETAILS:
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

    case types.LOAD_DETAILS_SUCCESS:
      return {
        ...state,
        details: action.payload,
        isLoading: false, 
        hasError: false
      }

    case types.LOAD_DETAILS_FAIL:
      return { ...state, isLoading: false, details: [], hasError: true }


    default:
      return state
  }
}

