import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import { View, Button } from "react-native"
import { Text } from "react-native-paper"
import BaseLayout from "../../../layouts/BaseLayout"
import SearchContainer from "../containers/Search"
import Results from "../views/Results"

const SearchStack = createStackNavigator()

const SearchList = ({ navigation }) => (
  <BaseLayout>
    <Text>SearchList</Text>
    <Button
      onPress={() => navigation.navigate("Search")}
      title="To Search Component!"
    />
  </BaseLayout>
)

const Search = () => (
  <SearchStack.Navigator>
    <SearchStack.Screen
      name="Search"
      component={SearchContainer}
      options={{ tabBarLabel: "Search!" }}
    />
    <SearchStack.Screen
      name="Results"
      component={Results}
      options={{ tabBarLabel: "Results!" }}
    />
  </SearchStack.Navigator>
)

export default Search
