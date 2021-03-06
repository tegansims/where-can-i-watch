import React from "react"
import { FlatList, View } from "react-native"
import Result from "../containers/Result"
import Loading from "../../ui/components/Loading"
import ErrorState from "../../ui/components/ErrorState"

const renderItem = item => <Result {...item} />

const ResultsList = ({ searchResults, hasError, navigation, isLoading }) => {
  if (isLoading) return <Loading />
  if (hasError)
    return (
      <View flex={1} justifyContent="center" alignItems="center">
        <ErrorState navigation={navigation} />
      </View>
    )
  if (!searchResults?.length)
    return (
      <View flex={1} justifyContent="center" alignItems="center">
        <ErrorState navigation={navigation} text="No results to show!" />
      </View>
    )
  return (
    <View paddingVertical={24}>
      <FlatList
        data={searchResults}
        renderItem={renderItem}
        keyExtractor={item => item.external_ids.imdb.id}
      />
    </View>
  )
}

export default ResultsList
