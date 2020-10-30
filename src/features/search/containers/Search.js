import { connect } from "react-redux"
import { SearchActions, SearchSelectors } from ".."
import SearchComponent from "../components/SearchComponent"

const mapState = state => ({
  searchResults: SearchSelectors.getSearchResults(state)
})

const mapDispatch = dispatch => ({
  handleSubmit: searchTerm => dispatch(SearchActions.search(searchTerm))
})

const Search = connect(mapState, mapDispatch)(SearchComponent)

export default Search
