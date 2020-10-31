import { types } from "./search.actions"

export const initialState = {
  isLoading: false,
  hasError: false,
  searchResults: {},
  details: {},
  isLoadingDetails: false,
  hasErrorDetails: false
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SEARCH:
      return {
        ...state,
        isLoading: true,
        hasError: false,
        searchResults: {}
      }

    case types.SEARCH_SUCCESS:
      return {
        ...state,
        searchResults: action.payload,
        isLoading: false,
        hasError: false
      }

    case types.SEARCH_FAIL:
      return { ...state, isLoading: false, searchResults: {}, hasError: true }

    case types.LOAD_DETAILS:
      return {
        ...state,
        isLoadingDetails: true,
        hasErrorDetails: false,
        details: {}
      }
    case types.LOAD_DETAILS_SUCCESS:
      return {
        ...state,
        details: action.payload,
        isLoadingDetails: false,
        hasErrorDetails: false
      }

    case types.LOAD_DETAILS_FAIL:
      return {
        ...state,
        isLoadingDetails: false,
        details: {},
        hasErrorDetails: true
      }

    default:
      return state
  }
}
