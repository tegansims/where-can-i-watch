import React, { useEffect, useState } from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { AntDesign } from "@expo/vector-icons"
import { createStackNavigator } from "@react-navigation/stack"
import screens from "./src/screens"

const Tab = createBottomTabNavigator()
const MainStack = createStackNavigator()

const SignedInContent = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "white",
        tabBarStyle: [
          {
            display: "flex",
            backgroundColor: "#3E4E56",
            paddingVertical: 5
          },
          null
        ],
        headerMode: "none",
        headerShown: false,
        tabBarShowLabel: false
      }}
    >
      <Tab.Screen
        name="SearchTab"
        component={screens.Search}
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name="search1" size={30} color={color} />
          )
        }}
      />
      <Tab.Screen
        name="AboutTab"
        component={screens.About}
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name="question" size={30} color={color} />
          )
        }}
      />
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
