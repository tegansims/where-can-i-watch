import React from "react"
import { FlatList, Text, View } from "react-native"
import Result from "./Result"
import Loading from "../../ui/components/Loading"
import { TouchableOpacity } from "react-native-gesture-handler"

const renderItem = item => <Result {...item} />

const ResultsList = ({ searchResults, hasError, navigation }) => {
  if (!searchResults) return <Loading />
  if (hasError)
    return (
      <View flex={1} justifyContent="center" alignItems="center">
        <Text style={{ fontSize: 18 }}>Whoops, something's gone wrong!</Text>
        <TouchableOpacity onPress={()=>navigation.navigate("Search")}>
          <Text>Please try again</Text>
        </TouchableOpacity>
      </View>
    )
  return (
    <FlatList
      data={searchResults.results}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
  )
}

export default ResultsList
