import { connect } from "react-redux"
import { SearchSelectors } from ".."
import DetailsModalComponent from "../components/DetailsModal"

const mapState = state => ({
  details: SearchSelectors.getDetails(state),
  hasError: SearchSelectors.getHasErrorDetails(state),
  isLoading: SearchSelectors.getIsLoadingDetails(state)
})

const DetailsModal = connect(mapState)(DetailsModalComponent)

export default DetailsModal
