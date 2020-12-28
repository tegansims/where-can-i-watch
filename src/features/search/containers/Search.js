import { connect } from "react-redux"
import { SearchActions } from ".."
import SearchComponent from "../components/SearchComponent"

const mapDispatch = dispatch => ({
  handleSubmit: searchTerm => dispatch(SearchActions.search(searchTerm))
})

const Search = connect(null, mapDispatch)(SearchComponent)

export default Search
