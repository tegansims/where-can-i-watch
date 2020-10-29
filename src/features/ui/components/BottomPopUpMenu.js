import React from "react"
import { View } from "react-native"
import {
  Menu,
  MenuOptions,
  MenuTrigger,
  renderers
} from "react-native-popup-menu"

const BottomPopUpMenu = ({ options, menuHeight = "90%", children }) => (
  <Menu renderer={renderers.SlideInMenu}>
    <MenuTrigger>{children}</MenuTrigger>
    <MenuOptions optionsContainerStyle={{ height: menuHeight }}>
      <View padding={20} height="100%">
        {options}
      </View>
    </MenuOptions>
  </Menu>
)

export default BottomPopUpMenu
