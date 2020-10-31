import React, { useState } from "react"
import { TextInput, Title } from "react-native-paper"
import { View, Button, TouchableOpacity, Text } from "react-native"
import BaseLayout from "../../../layouts/BaseLayout"
import { useFonts, Karla_700Bold } from "@expo-google-fonts/karla"

const SearchComponent = ({ handleSubmit, navigation }) => {
  let [fontsLoaded] = useFonts({
    Karla_700Bold
  })
  const [searchTerm, setSearchTerm] = useState("")

  const handlePress = () => {
    handleSubmit(searchTerm)
    navigation?.push("Results")
  }

  if (!fontsLoaded) return null

  return (
    <BaseLayout>
      <View justifyContent="center" flex={1}>
        <Title
          style={{
            fontFamily: "Karla_700Bold",
            fontSize: 38,
            textAlign: "center",
            paddingBottom: 38,
            lineHeight: 50,
            color: "white"
          }}
        >
          What do you want to watch today?
        </Title>
        <TextInput
          onChangeText={text => setSearchTerm(text)}
          value={searchTerm}
        />
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
