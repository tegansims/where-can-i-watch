import { connect } from "react-redux"
import { SearchActions, SearchSelectors } from ".."
import ResultsListComponent from "../components/ResultsList"

const mapState = state => ({
  searchResults: SearchSelectors.getSearchResults(state),
  hasError: SearchSelectors.getHasError(state)
})


const Results = connect(mapState)(ResultsListComponent)

export default Results
