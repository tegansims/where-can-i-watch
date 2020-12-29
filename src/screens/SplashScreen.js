import React, { useRef } from "react"
import { View, StyleSheet, ImageBackground, Text, Animated } from "react-native"
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
  const fadeAnim = useRef(new Animated.Value(1)).current

  const fadeOut = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 1500,
      useNativeDriver: true
    }).start()
  }
  // let [fontsLoaded] = useFonts({
  //   Karla_700Bold
  // })
  // if (!fontsLoaded) return null
  setTimeout(() => {
    fadeOut()
  }, 1500)
  return (
    <Animated.View
      style={[
        styles.container,
        {
          opacity: fadeAnim 
        }
      ]}
    >
      <View style={styles.container}>
        <ImageBackground source={image} style={styles.image}>
          <View paddingTop={28}>
            <Text style={styles.text}>Where Can I Watch...?</Text>
          </View>
        </ImageBackground>
      </View>
    </Animated.View>
  )
}

export default SplashScreen
