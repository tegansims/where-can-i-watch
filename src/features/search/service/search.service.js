import axios from "axios"

const searchHeaders = {
  "x-rapidapi-host":
    "utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com",
  "x-rapidapi-key": "e2d554ecb8msh62122a83b015e31p126344jsn549fa3908955"
}

const detailsHeaders = {
  "x-rapidapi-host": "imdb8.p.rapidapi.com",
  "x-rapidapi-key": "e2d554ecb8msh62122a83b015e31p126344jsn549fa3908955"
}

const SEARCH_URL =
  "https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com"
const DETAILS_URL = "https://imdb8.p.rapidapi.com/title/get-overview-details"

export const loadSearch = (
  { searchTerm, countryCode = "uk" },
  url = SEARCH_URL,
  api = axios
) =>
  api({
    method: "GET",
    url: `${url}/lookup?term=${searchTerm}&country=${countryCode}`,
    headers: searchHeaders
  })

export const loadDetails = (
  { id, countryCode = "GB" },
  url = DETAILS_URL,
  api = axios
) =>
  api({
    method: "GET",
    url: `${url}?currentCountry=${countryCode}&tconst=${id}`,
    headers: detailsHeaders
  })
