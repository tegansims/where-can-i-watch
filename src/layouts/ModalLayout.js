import React from "react"
import { Modal, StyleSheet, View } from "react-native"

const ModalLayout = ({ modalVisible, children }) => (
  <View style={styles.centeredView}>
    <Modal animationType="fade" transparent={true} visible={modalVisible}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>{children}</View>
      </View>
    </Modal>
  </View>
)

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
    height: "60%"
  }
})

export default ModalLayout
