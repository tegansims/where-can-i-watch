import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import AboutComponent from "../components/AboutComponent"

const AboutStack = createStackNavigator()

const About = () => (
  <AboutStack.Navigator
    screenOptions={{
      activeTintColor: "tomato",
      inactiveTintColor: "white",
      style: {
        backgroundColor: "#3E4E56",
        paddingTop: 5
      },
      headerMode: "none",
      headerShown: false
    }}
  >
    <AboutStack.Screen name="About" component={AboutComponent} />
  </AboutStack.Navigator>
)

export default About
