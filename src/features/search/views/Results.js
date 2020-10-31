import React from "react"
import BaseLayout from "../../../layouts/BaseLayout"
import Results from "../containers/ResultsList"

const ResultsView = ({ route, navigation }) => {
  const { params } = route
  return (
    <BaseLayout>
      <Results navigation={navigation}/>
    </BaseLayout>
  )
}

export default ResultsView
