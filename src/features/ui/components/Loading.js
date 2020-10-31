import React from "react"
import { ActivityIndicator, View } from "react-native"

const Loading = ({ size = "large", flex="1" }) => (
  <View flex={flex} justifyContent="center">
    <ActivityIndicator size={size} />
  </View>
)

export default Loading
