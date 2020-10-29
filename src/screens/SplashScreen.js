import React from "react"
import { View, StyleSheet, ImageBackground, Text } from "react-native"
import { useFonts, Karla_700Bold } from "@expo-google-fonts/karla"

const image = require("../../assets/camera.jpg")

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  text: {
    color: "white",
    fontSize: 36,
    fontWeight: 600,
    fontWeight: "bold",
    alignSelf: "center",
    marginTop: 280,
    fontFamily: "Karla_700Bold"
  }
})
const SplashScreen = () => {
  let [fontsLoaded] = useFonts({
    Karla_700Bold
  })
  if (!fontsLoaded) return null
  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image}>
        <View paddingTop={28}>
          <Text style={styles.text} >
            Where Can I Watch...?
          </Text>
        </View>
      </ImageBackground>
    </View>
  )
}

export default SplashScreen
