import React from "react"
import { ActivityIndicator, View } from "react-native"

const Loading = ({ size = "large" }) => (
  <View flex={1} justifyContent="center">
    <ActivityIndicator size={size} />
  </View>
)

export default Loading
