import React, { useState, useRef } from "react"
import { Title } from "react-native-paper"
import { AntDesign } from "@expo/vector-icons"

import {
  View,
  TouchableOpacity,
  Animated,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  TextInput
} from "react-native"
import BaseLayout from "../../../layouts/BaseLayout"

const SearchComponent = ({ handleSubmit, navigation }) => {
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

  return (
    <Animated.View style={{ flex: 1, opacity: fadeAnim }}>
      <BaseLayout>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={{ flex: 1, width: "100%" }}
        >
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View justifyContent="center" flex={1}>
              <Title
                style={{
                  fontFamily: "Karla_700Bold",
                  fontSize: 32,
                  textAlign: "center",
                  paddingBottom: 48,
                  lineHeight: 40,
                  color: "white"
                }}
              >
                What do you want to watch today?
              </Title>
              <View
                flexDirection="row"
                alignItems="center"
                justifyContent="space-between"
                style={{
                  paddingHorizontal: 12,
                  backgroundColor: "white",
                  borderRadius: 3,
                  width: "100%"
                }}
              >
                <TextInput
                  onChangeText={text => setSearchTerm(text)}
                  value={searchTerm}
                  autoFocus
                  keyboardAppearance="dark"
                  style={{
                    backgroundColor: "white",
                    width: "90%",
                    minHeight: 50
                  }}
                  selectionColor="tomato"
                />
                <TouchableOpacity onPress={() => handlePress(searchTerm)}>
                  <AntDesign name="search1" size={28} color="tomato" />
                </TouchableOpacity>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </BaseLayout>
    </Animated.View>
  )
}


export default SearchComponent
