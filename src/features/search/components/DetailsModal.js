import React from "react"
import { Text, View, StyleSheet } from "react-native"
import { IconButton } from "react-native-paper"
import ModalLayout from "../../../layouts/ModalLayout"
import ErrorState from "../../ui/components/ErrorState"
import Loading from "../../ui/components/Loading"

const DetailsToShow = ({
  setModalVisible,
  modalVisible,
  details,
  hasError,
  isLoading,
  navigation
}) => {
  console.log({ isLoading })
  if (isLoading) return <Loading flex="auto" />
  if (hasError) return <ErrorState navigation={navigation} />
  return (
    <>
      <View alignSelf="flex-end">
        <IconButton
          icon="close"
          color="black"
          size={20}
          onPress={() => setModalVisible(!modalVisible)}
        />
      </View>
      <Text style={{ ...styles.modalText, fontSize: 22 }}>
        {details?.title?.title}
      </Text>
      <Text style={{ ...styles.modalText, fontSize: 16 }}>
        {details?.plotOutline?.text}
      </Text>
    </>
  )
}

const DetailsModal = ({
  modalVisible,
  setModalVisible,
  details,
  hasError,
  navigation
}) => {
  return (
    <ModalLayout modalVisible={modalVisible}>
      <DetailsToShow
        setModalVisible={setModalVisible}
        modalVisible={modalVisible}
        details={details}
        hasError={hasError}
        navigation={navigation}
      />
    </ModalLayout>
  )
}

const styles = StyleSheet.create({
  modalText: {
    fontWeight: "600",
    marginBottom: 12,
    textAlign: "center",
    color: "black"
  }
})
export default DetailsModal
