import { connect } from "react-redux"
import { SearchActions } from ".."
import ResultComponent from "../components/Result"

const mapDispatch = dispatch => ({
  loadDetails: id => dispatch(SearchActions.loadDetails(id))
})

const Result = connect(null, mapDispatch)(ResultComponent)

export default Result
