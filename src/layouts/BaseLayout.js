import React from "react"
import { View } from "react-native"

const BaseLayout = ({ children }) => (
  <View style={{ padding: 12, backgroundColor: "white", flex: 1}}>{children}</View>
)

export default BaseLayout
