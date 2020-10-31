export const types = {
  SEARCH: "[Search] Search",
  SEARCH_SUCCESS: "[Search] Search Success",
  SEARCH_FAIL: "[Search] Search Fail",
  LOAD_DETAILS: "[Search] Load Details",
  LOAD_DETAILS_SUCCESS: "[Search] Load Details Success",
  LOAD_DETAILS_FAIL: "[Search] Load Details Fail"
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

export const loadDetails = payload => ({
  type: types.LOAD_DETAILS,
  payload
})

export const loadDetailsSuccess = payload => ({
  type: types.LOAD_DETAILS_SUCCESS,
  payload
})

export const loadDetailsFail = () => ({
  type: types.LOAD_DETAILS_FAIL
})
