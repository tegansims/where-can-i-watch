import React, { useState } from "react"
import { TextInput, Title } from "react-native-paper"
import { View, Button } from "react-native"
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
            fontSize: 36,
            textAlign: "center",
            paddingBottom: 32,
            lineHeight: 40,
            color: "white"
          }}
        >
          What are you wanting to watch today?
        </Title>
        <TextInput
          onChangeText={text => setSearchTerm(text)}
          value={searchTerm}
        />
        <Button
          onPress={handlePress}
          title="Search"
          color="white"
          accessibilityLabel="Search for TV shows or films"
          mode="outlined"
        />
      </View>
    </BaseLayout>
  )
}

export default SearchComponent
