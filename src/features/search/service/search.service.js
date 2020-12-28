import axios from "axios"

const BASE_URL = "http://localhost:4000/"

export const loadSearch = async searchTerm => {
  const queryData = {
    query: `
      query {
        getMovieBySearchTerm(searchTerm: "${searchTerm}") {
          name
          picture
          locations {
            icon
            display_name
            url
          }
          external_ids {
            imdb {
              url
              id
            }
          }
          }
        }
      `
  }
  return axios({
    url: BASE_URL,
    method: "post",
    data: queryData
  })
}


export const loadDetails = async ( id, countryCode = "GB" ) => {
  const queryData = {
    query: `
      query {
        getMovieDetails(id: "${id}", countryCode: "${countryCode}") {
          id
          title
          releaseDate
          plotOutline
          plotSummary
          image
          }
        }
      `
  }
  return axios({
    url: BASE_URL,
    method: "post",
    data: queryData
  })
}
