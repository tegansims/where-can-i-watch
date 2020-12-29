import React, { useEffect, useState } from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { AntDesign } from "@expo/vector-icons"
import { createStackNavigator } from "@react-navigation/stack"
import screens from "./src/screens"

const Tab = createBottomTabNavigator()
const MainStack = createStackNavigator()

const SignedInContent = () => {
  const tabBarScreenOptions = ({ route }) => ({
    tabBarIcon: ({ color }) => {
      let iconName

      if (route.name === "Search") {
        iconName = "search1"
      }
      if (route.name === "About") {
        iconName = "question"
      }

      return <AntDesign name={iconName} size={30} color={color} />
    }
  })
  return (
    <Tab.Navigator
      screenOptions={tabBarScreenOptions}
      tabBarOptions={{
        activeTintColor: "tomato",
        inactiveTintColor: "white",
        style: {
          backgroundColor: "#3E4E56",
          paddingTop: 5
        }
      }}
    >
      <Tab.Screen name="Search" component={screens.Search} />
      <Tab.Screen name="About" component={screens.About} />
    </Tab.Navigator>
  )
}

const Main = () => {
  const [showSplashScreen, setShowSplashScreen] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setShowSplashScreen(false)
    }, 3000)
  }, [setShowSplashScreen])

  if (showSplashScreen) return <screens.SplashScreen />

  return (
    <MainStack.Navigator>
      <MainStack.Screen
        name="Main Content"
        component={SignedInContent}
        options={{ headerMode: "none", headerShown: false }}
      />
    </MainStack.Navigator>
  )
}

export default Main
