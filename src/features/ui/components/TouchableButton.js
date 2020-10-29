import React from "react"
import { Button as PaperButton } from "react-native-paper"
import { TouchableOpacity } from "react-native"

const TouchableButton = ({ children, ...props }) => (
  <TouchableOpacity>
    <PaperButton {...props}>{children}</PaperButton>
  </TouchableOpacity>
)

export default TouchableButton
