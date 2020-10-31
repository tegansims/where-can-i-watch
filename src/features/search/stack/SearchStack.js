import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import SearchContainer from "../containers/Search"
import Results from "../views/Results"

const SearchStack = createStackNavigator()

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
