import React from "react"
import { Modal, StyleSheet, View, Dimensions } from "react-native"
import { IconButton } from "react-native-paper"

const windowWidth = Dimensions.get("window").width

const ModalLayout = ({
  modalVisible,
  setModalVisible,
  showIcons = true,
  children
}) => {
  const Icons = () => (
    <View alignSelf="flex-end">
      <View flexDirection="row">
        <IconButton
          icon="close"
          color="black"
          size={30}
          onPress={() => setModalVisible(!modalVisible)}
        />
      </View>
    </View>
  )

  return (
    <View style={{ ...styles.centeredView }}>
      <Modal animationType="fade" transparent={true} visible={modalVisible}>
        <View
          style={{ ...styles.centeredView, backgroundColor: "#00000044" }}
          onStartShouldSetResponder={() => setModalVisible(false)}
        >
          <View style={{ ...styles.centeredView }} width={windowWidth}>
            <View style={styles.modalView}>
              {showIcons && <Icons />}
              {children}
            </View>
          </View>
        </View>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 10,
    backgroundColor: "white",
    borderRadius: 4,
    paddingHorizontal: 25,
    paddingBottom: 25,
    shadowColor: "#333",
    shadowOffset: {
      width: 10,
      height: 12
    },
    shadowOpacity: 0.75,
    shadowRadius: 3.84,
    elevation: 5,
    width: "85%",
    height: "65%"
  }
})

export default ModalLayout
