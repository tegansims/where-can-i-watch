import React from "react"
import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet
} from "react-native"

const ErrorState = ({
  navigation,
  text = "Whoops, something's gone wrong!",
  fontColor
}) => (
  <>
    <Text
      style={{
        ...styles(fontColor).text,
        fontSize: 24
      }}
    >
      {text}
    </Text>
    <View paddingTop={36} flexDirection="row" justifyContent="center">
      {navigation ? (
        <TouchableOpacity onPress={() => navigation.navigate("Search")}>
          <Text style={{ ...styles(fontColor).text }}>Please try again</Text>
        </TouchableOpacity>
      ) : (
        <Text style={{ ...styles(fontColor).text }}>Please try again</Text>
      )}
    </View>
  </>
)

const styles = (fontColor) => StyleSheet.create({
  text: {
    fontSize: 20,
    textAlign: "center",
    color: fontColor || "white"
  }
})
export default ErrorState
