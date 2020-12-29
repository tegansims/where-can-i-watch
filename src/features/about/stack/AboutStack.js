import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import AboutComponent from "../components/AboutComponent"

const AboutStack = createStackNavigator()

const About = () => (
  <AboutStack.Navigator>
    <AboutStack.Screen
      name="About"
      component={AboutComponent}
    />
    
  </AboutStack.Navigator>
)

export default About
