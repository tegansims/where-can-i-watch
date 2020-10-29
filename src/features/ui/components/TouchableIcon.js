import React from "react"
import { Feather } from "@expo/vector-icons"
import { TouchableOpacity } from "react-native"

const TouchableIcon = ({ children, onPress, color="#555", size=24, ...props }) => (
  <TouchableOpacity onPress={onPress}>
    <Feather {...props} color={color} size={size}>{children}</Feather>
  </TouchableOpacity>
)

export default TouchableIcon
