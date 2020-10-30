import React from "react"
import { View, Button, Text, Linking } from "react-native"

const Result = ({ item }) => {
  const { name, locations } = item
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

export default Result
