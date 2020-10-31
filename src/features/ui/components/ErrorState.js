import React from "react"
import { Text, TouchableOpacity, View, IconButton } from "react-native"

const ErrorState = ({
  navigation,
  text = "Whoops, something's gone wrong!"
}) => (
  <>
    <Text style={{ fontSize: 24 }}>{text}</Text>
    <View paddingTop={28} flexDirection="row">
      <TouchableOpacity onPress={() => navigation.navigate("Search")}>
        {/* <IconButton icon="rotate-left" color="black" size={20} /> */}
        <Text style={{ fontSize: 18 }}>Please try again</Text>
      </TouchableOpacity>
    </View>
  </>
)

export default ErrorState
