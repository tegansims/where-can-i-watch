import { createSelector } from "reselect"

const searchState = state => state?.search

export const getSearchResults = createSelector(searchState, state => state?.searchResults)

export const getIsLoading = createSelector(searchState, state => state?.isLoading)

export const getHasError = createSelector(searchState, state => state?.hasError)
