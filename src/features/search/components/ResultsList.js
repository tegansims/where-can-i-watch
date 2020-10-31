import React from "react"
import { FlatList, View } from "react-native"
import Result from "../containers/Result"
import Loading from "../../ui/components/Loading"
import ErrorState from "../../ui/components/ErrorState"

const renderItem = (item, navigation) => <Result {...item} navigation={navigation}  />

const ResultsList = ({ searchResults, hasError, navigation }) => {
  if (!!searchResults.length) return <Loading />
  if (hasError)
    return (
      <View flex={1} justifyContent="center" alignItems="center">
        <ErrorState navigation={navigation} />
      </View>
    )
  return (
    <View paddingVertical={24}>
      <FlatList
        data={searchResults.results}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  )
}

export default ResultsList
