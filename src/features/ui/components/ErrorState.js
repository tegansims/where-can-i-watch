import React from "react"
import { Text, TouchableOpacity } from "react-native"

const ErrorState = ({ navigation }) => (
  <>
    <Text style={{ fontSize: 18 }}>Whoops, something's gone wrong!</Text>
    <TouchableOpacity onPress={() => navigation.navigate("Search")}>
      <Text>Please try again</Text>
    </TouchableOpacity>
  </>
)

export default ErrorState
