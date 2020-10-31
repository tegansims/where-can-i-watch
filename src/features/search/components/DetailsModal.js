import React, { useState } from "react"
import { Text, View, StyleSheet, Image } from "react-native"
import { ScrollView } from "react-native-gesture-handler"
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
  const [showFront, setShowFront] = useState(true)
  const image = { uri: details?.title?.image?.url }

  const Icons = () => (
    <View alignSelf="flex-end">
      <View flexDirection="row">
        <IconButton
          icon="rotate-3d-variant"
          color="black"
          size={20}
          onPress={() => setShowFront(!showFront)}
        />
        <IconButton
          icon="close"
          color="black"
          size={20}
          onPress={() => setModalVisible(!modalVisible)}
        />
      </View>
    </View>
  )

  if (isLoading) return <Loading flex="auto" />
  if (hasError) return <ErrorState navigation={navigation} />

  return (
    <>
      <Icons />
      {!showFront && <Image source={image} style={styles.image} />}
      {showFront && (
        <ScrollView>
          <Text style={{ ...styles.modalText, fontSize: 24 }}>
            {details?.title?.title}
          </Text>
          <Text style={{ ...styles.modalText, fontSize: 18 }}>
            {details?.plotOutline?.text}
          </Text>
          <Text style={{ ...styles.modalText, fontSize: 16 }}>
            {details?.plotSummary?.text}
          </Text>
        </ScrollView>
      )}
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
  },
  container: {
    flex: 1,
    flexDirection: "column"
  },
  image: {
    flex: 1,
    height: "100%",
    width: "100%",
    borderRadius: 4,
    resizeMode: "cover"
  },
  text: {
    color: "grey",
    fontSize: 30,
    fontWeight: "bold"
  }
})
export default DetailsModal
