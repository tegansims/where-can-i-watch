import React, { useState } from "react"
import { TextInput, Title } from "react-native-paper"
import { View, Button, Text, Linking } from "react-native"
import BaseLayout from "../../../layouts/BaseLayout"
import { useFonts, Karla_700Bold } from "@expo-google-fonts/karla"

const ResultsDisplay = ({ name, locations }) => {
  return (
    <View>
      <Text
        style={{
          fontSize: 18,
          fontWeight: "600"
        }}
      >
        {name}
      </Text>
      {locations &&
        locations.map(loc => (
          <Button
            key={loc.url}
            title={loc.display_name}
            onPress={() => Linking.openURL(loc.url)}
          />
        ))}
    </View>
  )
}

const SearchComponent = ({ handleSubmit, searchResults }) => {
  let [fontsLoaded] = useFonts({
    Karla_700Bold
  })
  const [searchTerm, setSearchTerm] = useState("")

  if (!fontsLoaded) return null

  return (
    <BaseLayout>
      <Title style={{ fontFamily: "Karla_700Bold" }}>
        What are you looking to watch today?
      </Title>
      <TextInput
        onChangeText={text => setSearchTerm(text)}
        value={searchTerm}
      />
      <Button
        onPress={() => handleSubmit(searchTerm)}
        title="Search"
        color="#841584"
        accessibilityLabel="Search for TV shows or films"
      />
      {searchResults &&
        searchResults.results &&
        searchResults.results.map(result => (
          <ResultsDisplay key={result.name} {...result} />
        ))}
    </BaseLayout>
  )
}

export default SearchComponent
