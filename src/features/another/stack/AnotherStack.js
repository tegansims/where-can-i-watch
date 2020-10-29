import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import { View, Button } from "react-native"
import { Text } from "react-native-paper"

const AnotherStack = createStackNavigator()

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

const Another = () => (
  <AnotherStack.Navigator>
    <AnotherStack.Screen
      name="ContactList"
      component={ContactList}
      options={{ tabBarLabel: "ContactList!" }}
    />
    <AnotherStack.Screen
      name="SingleContact"
      component={SingleContact}
      options={{ tabBarLabel: "SingleContact!" }}
    />
  </AnotherStack.Navigator>
)

export default Another
