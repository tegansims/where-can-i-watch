import React from "react"
import ModalLayout from "../../../layouts/ModalLayout"
import AboutFlip from "./FlipCard"
import ErrorState from "../../ui/components/ErrorState"
import Loading from "../../ui/components/Loading"

const holdingImage = require("../../../../assets/adaptive-icon.png")

const DetailsModal = ({
  modalVisible,
  setModalVisible,
  details,
  hasError,
  isLoading
}) => {
  if (isLoading)
    return (
      <ModalLayout
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      >
        <Loading />
      </ModalLayout>
    )

  if (hasError)
    return (
      <ModalLayout
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      >
        <ErrorState fontColor="black" />
      </ModalLayout>
    )
  const image = (details?.image && { uri: details.image }) || holdingImage

  return (
    <ModalLayout modalVisible={modalVisible} setModalVisible={setModalVisible}>
      <AboutFlip details={details} image={image} />
    </ModalLayout>
  )
}

export default DetailsModal
