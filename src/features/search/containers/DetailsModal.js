import { connect } from "react-redux"
import { SearchActions, SearchSelectors } from ".."
import DetailsModalComponent from "../components/DetailsModal"

const mapState = state => ({
  details: SearchSelectors.getDetails(state),
  hasError: SearchSelectors.getHasError(state),
  isLoading: SearchSelectors.getIsLoading(state)

})

const mapDispatch = dispatch => ({})

const DetailsModal = connect(mapState, mapDispatch)(DetailsModalComponent)

export default DetailsModal
