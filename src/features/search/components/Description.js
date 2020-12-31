import React from "react"
import { Text, StyleSheet } from "react-native"
import { ScrollView } from "react-native-gesture-handler"

 const Description = ({details}) => (
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

  const styles = StyleSheet.create({
    modalText: {
      fontWeight: "600",
      marginBottom: 12,
      textAlign: "center",
      color: "black"
    }
  })
  export default Description