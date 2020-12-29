import React from "react"
import BaseLayout from "../../../layouts/BaseLayout"
import Results from "../containers/ResultsList"

const ResultsView = ({ navigation }) => {
  return (
    <BaseLayout>
      <Results navigation={navigation}/>
    </BaseLayout>
  )
}

export default ResultsView
