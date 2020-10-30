export const types = {
  SEARCH: "[Search] Search",
  SEARCH_SUCCESS: "[Search] Search Success",
  SEARCH_FAIL: "[Search] Search Fail"
}

export const search = payload => ({
  type: types.SEARCH,
  payload
})

export const searchSuccess = payload => ({
  type: types.SEARCH_SUCCESS,
  payload
})

export const searchFail = () => ({
  type: types.SEARCH_FAIL
})
