import { connect } from "react-redux"
import { SearchActions, SearchSelectors } from ".."
import ResultComponent from "../components/Result"

const mapState = state => ({})

const mapDispatch = dispatch => ({
  loadDetails: id => dispatch(SearchActions.loadDetails(id)),
  handleSubmit: searchTerm => dispatch(SearchActions.search(searchTerm))
})

const Result = connect(mapState, mapDispatch)(ResultComponent)

export default Result
