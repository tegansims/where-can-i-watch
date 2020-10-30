import React from "react"
import { View } from "react-native"

const BaseLayout = ({ children, bg="#3E4E56"}) => (
  <View style={{ padding: 12, backgroundColor: bg, flex: 1 }}>
    {children}
  </View>
)

export default BaseLayout
