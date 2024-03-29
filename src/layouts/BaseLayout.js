import React from "react"
import { View } from "react-native"

const BaseLayout = ({ children, bg = "#3E4E56" }) => (
  <View
    style={{
      paddingHorizontal: 24,
      paddingTop: 24,
      backgroundColor: bg,
      flex: 1
    }}
  >
    {children}
  </View>
)

export default BaseLayout
