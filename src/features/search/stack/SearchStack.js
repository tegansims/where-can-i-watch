import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import { View, Button } from "react-native"
import { Text } from "react-native-paper"
import BaseLayout from "../../../layouts/BaseLayout"
import SearchContainer from "../containers/Search"

const SearchStack = createStackNavigator()

const SearchList = ({ navigation }) => (
  <BaseLayout>
    <Text>SearchList</Text>
    <Button
      onPress={() => navigation.navigate("SearchContainer")}
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
      name="SearchContainer"
      component={SearchContainer}
      options={{ tabBarLabel: "SearchContainer!" }}
    />
  </SearchStack.Navigator>
)

export default Search
