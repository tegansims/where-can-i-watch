import React, { useState } from "react"
import { Title, TextInput } from "react-native-paper"
import { View, TouchableOpacity, Text } from "react-native"
import BaseLayout from "../../../layouts/BaseLayout"
import { useFonts, Karla_700Bold } from "@expo-google-fonts/karla"

const SearchComponent = ({ handleSubmit, navigation }) => {
  let [fontsLoaded] = useFonts({
    Karla_700Bold
  })
  const [searchTerm, setSearchTerm] = useState("")

  const handlePress = async () => {
    await handleSubmit(searchTerm)
    navigation?.push("Results")
  }

  if (!fontsLoaded) return null

  return (
    <BaseLayout>
      <View justifyContent="center" flex={1}>
        <TextInput
          onChangeText={text => setSearchTerm(text)}
          value={searchTerm}
          autoFocus
          keyboardAppearance="dark"
        />
        <Title
          style={{
            fontFamily: "Karla_700Bold",
            fontSize: 38,
            textAlign: "center",
            paddingTop: 24,
            // paddingBottom: 24,
            lineHeight: 50,
            color: "white"
          }}
        >
          What do you want to watch today?
        </Title>
        <View paddingTop={48}>
          <TouchableOpacity paddingTop={24} onPress={handlePress}>
            <Text
              style={{
                fontSize: 24,
                fontWeight: "600",
                textAlign: "center"
              }}
            >
              Search
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </BaseLayout>
  )
}

export default SearchComponent
