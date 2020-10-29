import React from "react"
import { View, Text } from "react-native"
import { Provider as StoreProvider } from "react-redux"
import { NavigationContainer } from "@react-navigation/native"
import { ApolloProvider } from "@apollo/client"
import { useFonts, Karla_400Regular, Karla_700Bold } from "@expo-google-fonts/karla"
import { AppLoading } from "expo";
import { setCustomText } from 'react-native-global-props';

import store from "./src/store"
import Main from "./main"
import ErrorBoundary from "./src/features/ui/components/ErrorBoundary"

import client from "./mainClient"

const GenericErrorFallback = () => (
  <View>
    <Text>There has been an error. Please try again later</Text>
  </View>
)

const App = () => {
  let [fontsLoaded] = useFonts({
    Karla_400Regular, 
    Karla_700Bold
  })

  const customTextProps = { 
    style: { 
      fontFamily: "Karla_400Regular"
    }
  }

  setCustomText(customTextProps);

  if (!fontsLoaded) return <AppLoading />
  
  return (
    <ErrorBoundary fallback={GenericErrorFallback}>
      <ApolloProvider client={client}>
        <StoreProvider store={store}>
          <NavigationContainer>
            <Main />
          </NavigationContainer>
        </StoreProvider>
      </ApolloProvider>
    </ErrorBoundary>
  )
}

export default App
