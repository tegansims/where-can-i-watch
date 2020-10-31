import React, { useState } from "react"
import { Text, View, StyleSheet, Image } from "react-native"
import { ScrollView } from "react-native-gesture-handler"
import { IconButton } from "react-native-paper"
import ModalLayout from "../../../layouts/ModalLayout"
import ErrorState from "../../ui/components/ErrorState"
import Loading from "../../ui/components/Loading"

const DetailsToShow = ({ setModalVisible, modalVisible, details }) => {
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

  const Description = () => (
    <ScrollView>
      <Text style={{ ...styles.modalText, fontSize: 28 }}>
        {details?.title?.title}
      </Text>
      <Text style={{ ...styles.modalText, fontSize: 18, lineHeight: 20 }}>
        {details?.plotOutline?.text}
      </Text>
      <Text style={{ ...styles.modalText, fontSize: 16}}>
        {details?.plotSummary?.text}
      </Text>
    </ScrollView>
  )

  return (
    <>
      <Icons />
      {showFront ? (
        <Description />
      ) : (
        <Image source={image} style={styles.image} />
      )}
    </>
  )
}

const DetailsModal = ({
  modalVisible,
  setModalVisible,
  details,
  hasError,
  navigation,
  isLoading
}) => {
  if (isLoading)
    return (
      <ModalLayout modalVisible={modalVisible}>
        <Loading />
      </ModalLayout>
    )

  if (hasError) return <ErrorState navigation={navigation} />

  return (
    <ModalLayout modalVisible={modalVisible}>
      <DetailsToShow
        setModalVisible={setModalVisible}
        modalVisible={modalVisible}
        details={details}
        hasError={hasError}
        isLoading={isLoading}
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
