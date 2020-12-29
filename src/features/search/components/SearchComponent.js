import React, { useState, useRef } from "react"
import { Title, TextInput } from "react-native-paper"
import {
  View,
  TouchableOpacity,
  Text,
  Animated,
  StyleSheet
} from "react-native"
import BaseLayout from "../../../layouts/BaseLayout"
import { useFonts, Karla_700Bold } from "@expo-google-fonts/karla"

const SearchComponent = ({ handleSubmit, navigation }) => {
  // let [fontsLoaded] = useFonts({
  //   Karla_700Bold
  // })
  const [searchTerm, setSearchTerm] = useState("")
  const fadeAnim = useRef(new Animated.Value(1)).current

  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 0,
      useNativeDriver: true
    }).start()
  }
  const fadeOut = () => {
    Animated.timing(fadeAnim, {
      toValue: 0.1,
      duration: 1000,
      useNativeDriver: true
    }).start()
  }
  const handlePress = async () => {
    await handleSubmit(searchTerm)
    fadeOut()
    setTimeout(() => {
      navigation?.push("Results")
      setTimeout(() => {
        fadeIn()
      }, 500)
    }, 1000)
  }

  // if (!fontsLoaded) return null

  return (
    <Animated.View
      style={[
        styles.fadingContainer,
        {
          opacity: fadeAnim 
        }
      ]}
    >
      <BaseLayout>
        <View justifyContent="center" flex={1}>
          <TextInput
            onChangeText={text => setSearchTerm(text)}
            value={searchTerm}
            // autoFocus
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
    </Animated.View>
  )
}
const styles = StyleSheet.create({
  fadingContainer: {
    flex: 1
  },
  fadingText: {
    fontSize: 28,
    textAlign: "center",
    margin: 10
  },
  buttonRow: {
    flexDirection: "row",
    marginVertical: 16
  }
})

export default SearchComponent
