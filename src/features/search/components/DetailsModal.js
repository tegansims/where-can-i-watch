import React, { useState } from "react"
import { Text, View, StyleSheet, Image } from "react-native"
import { ScrollView } from "react-native-gesture-handler"
import { IconButton } from "react-native-paper"
import ModalLayout from "../../../layouts/ModalLayout"
import ErrorState from "../../ui/components/ErrorState"
import Loading from "../../ui/components/Loading"

const HasErrorModal = ({ setModalVisible, modalVisible }) => (
  <ModalLayout modalVisible={modalVisible}>
    <View alignSelf="flex-end" paddingBottom={36}>
      <View flexDirection="row">
        <IconButton
          icon="close"
          color="black"
          size={30}
          onPress={() => setModalVisible(!modalVisible)}
        />
      </View>
    </View>
    <ErrorState fontColor="black" />
  </ModalLayout>
)

const DetailsToShow = ({
  setModalVisible,
  modalVisible,
  details,
  showFront,
  setShowFront
}) => {
  const image = { uri: details?.image }
  const formatDate = date => date.slice(0, 4)

  const Icons = () => (
    <View alignSelf="flex-end">
      <View flexDirection="row">
        <IconButton
          icon="rotate-3d-variant"
          color="black"
          size={30}
          onPress={() => setShowFront(!showFront)}
        />
        <IconButton
          icon="close"
          color="black"
          size={30}
          onPress={() => setModalVisible(!modalVisible)}
        />
      </View>
    </View>
  )

  const Description = () => (
    <ScrollView>
      <Text style={{ ...styles.modalText, fontSize: 28 }}>
        {details?.title}
        <Text style={{ ...styles.modalText, fontSize: 22 }}>
          {" "}
          ({formatDate(details?.releaseDate)})
        </Text>
      </Text>
      <Text style={{ ...styles.modalText, fontSize: 18, lineHeight: 20 }}>
        {details?.plotOutline}
      </Text>
      <Text style={{ ...styles.modalText, fontSize: 16 }}>
        {details?.plotSummary}
      </Text>
    </ScrollView>
  )

  return (
    <>
      <Icons />
      {showFront ? (
        <Description setShowFront={setShowFront} showFront={showFront} />
      ) : (
        <Image
          source={image}
          style={styles.image}
          onPress={() => setShowFront(!showFront)}
        />
      )}
    </>
  )
}

const DetailsModal = ({
  modalVisible,
  setModalVisible,
  details,
  hasError,
  isLoading
}) => {
  if (isLoading)
    return (
      <ModalLayout modalVisible={modalVisible}>
        <Loading />
      </ModalLayout>
    )

  if (hasError)
    return (
      <HasErrorModal
        setModalVisible={setModalVisible}
        modalVisible={modalVisible}
      />
    )
  const [showFront, setShowFront] = useState(true)
  return (
    <ModalLayout
      modalVisible={modalVisible}
      callToAction={() => setShowFront(!showFront)}
    >
      <DetailsToShow
        setModalVisible={setModalVisible}
        modalVisible={modalVisible}
        details={details}
        hasError={hasError}
        isLoading={isLoading}
        showFront={showFront}
        setShowFront={setShowFront}
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
