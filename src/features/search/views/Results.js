import React from "react"
import { Text } from "react-native"

import SearchContainer from "../containers/Search"
import BaseLayout from "../../../layouts/BaseLayout"
import Results from "../containers/ResultsList"

const ResultsView = ({ route, navigation }) => {
  const { params } = route
  return (
    <BaseLayout>
      {/* <SearchContainer search={params} navigation={navigation}/> */}
      <Results navigation={navigation}/>
    </BaseLayout>
  )
}

export default ResultsView
