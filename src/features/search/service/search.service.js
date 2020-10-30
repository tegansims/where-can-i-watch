import axios from "axios"

const headers = {
  "x-rapidapi-host":
    "utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com",
  "x-rapidapi-key": "e2d554ecb8msh62122a83b015e31p126344jsn549fa3908955"
}

// export const loadSearch = ({ searchTerm, countryCode = "uk" }) => {
//   console.log("::SERVICE: ", searchTerm)
//   return axios.get(
//     `https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/lookup?term=${searchTerm}&country=${countryCode}`
//   )
// }

const SEARCH_URL = "https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com"

export const loadSearch = ({searchTerm, countryCode = "uk" }, url = SEARCH_URL, api = axios) =>
  api({
    method: "GET",
    url: `${url}/lookup?term=${searchTerm}&country=${countryCode}`,
    headers: headers
  })