import React from "react"
import { Title } from "react-native-paper"
import { View } from "react-native"
import BaseLayout from "../../../layouts/BaseLayout"
import { useFonts, Karla_700Bold } from "@expo-google-fonts/karla"

const AboutComponent = ({ handleSubmit, navigation }) => {
  // let [fontsLoaded] = useFonts({
  //   Karla_700Bold
  // })

  // if (!fontsLoaded) return null

  return (
    <BaseLayout>
      <View justifyContent="center" flex={1}>
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
          About this app
        </Title>
      </View>
    </BaseLayout>
  )
}

export default AboutComponent
