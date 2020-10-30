import { createSelector } from "reselect"

const searchState = state => state?.search

export const getSearchResults = createSelector(searchState, state => state?.searchResults)
