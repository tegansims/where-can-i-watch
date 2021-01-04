import React from "react"
import ModalLayout from "../../../layouts/ModalLayout"
import FlipCard from "./FlipCard"
import ErrorState from "../../ui/components/ErrorState"
import Loading from "../../ui/components/Loading"

const holdingImage = require("../../../../assets/where-icon.png")

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
    <ModalLayout
      showIcons={false}
      modalVisible={modalVisible}
      setModalVisible={setModalVisible}
    >
      <FlipCard
        details={details}
        image={image}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </ModalLayout>
  )
}

export default DetailsModal
