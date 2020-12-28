import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import { View, Button } from "react-native"
import { Text } from "react-native-paper"
import AboutComponent from "../components/AboutComponent"

const AboutStack = createStackNavigator()

const ContactList = ({ navigation }) => (
  <View>
    <Text>A ContactList</Text>
    <Button
      onPress={() => navigation.navigate("SingleContact")}
      title="To A Single Contact!"
    />
  </View>
)

const SingleContact = () => (
  <View>
    <Text>A Single Contact</Text>
  </View>
)

const About = () => (
  <AboutStack.Navigator>
    <AboutStack.Screen
      name="ContactList"
      component={AboutComponent}
      options={{ tabBarLabel: "ContactList!" }}
    />
    <AboutStack.Screen
      name="SingleContact"
      component={SingleContact}
      options={{ tabBarLabel: "SingleContact!" }}
    />
  </AboutStack.Navigator>
)

export default About
