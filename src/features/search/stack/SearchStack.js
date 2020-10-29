import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import { View, Button } from "react-native"
import { Text } from "react-native-paper"
import BaseLayout from "../../../layouts/BaseLayout"
import SearchComponent from "../components/SearchComponent"
import SearchTesting from "../components/SearchTesting"

const SearchStack = createStackNavigator()

const SearchList = ({ navigation }) => (
  <BaseLayout>
    <Text>SearchList</Text>
    <Button
      onPress={() => navigation.navigate("SearchComponent")}
      title="To Search Component!"
    />
  </BaseLayout>
)



const Search = () => (
  <SearchStack.Navigator>
    {/* <SearchStack.Screen
      name="SearchList"
      component={SearchList}
      options={{ tabBarLabel: "SearchList!" }}
    /> */}
    <SearchStack.Screen
      name="SearchTesting"
      component={SearchTesting}
      options={{ tabBarLabel: "SearchTesting!" }}
    />
    <SearchStack.Screen
      name="SearchComponent"
      component={SearchComponent}
      options={{ tabBarLabel: "SearchComponent!" }}
    />
  </SearchStack.Navigator>
)

export default Search
