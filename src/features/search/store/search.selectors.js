import { createSelector } from "reselect"

const searchState = state => state?.search

export const getSearchResults = createSelector(
  searchState,
  state => state?.searchResults
)

export const getIsLoading = createSelector(
  searchState,
  state => state?.isLoading
)

export const getHasError = createSelector(searchState, state => state?.hasError)

export const getDetails = createSelector(searchState, state => state?.details)

export const getHasErrorDetails = createSelector(
  searchState,
  state => state?.hasErrorDetails
)
export const getIsLoadingDetails = createSelector(
  searchState,
  state => state?.isLoadingDetails
)
