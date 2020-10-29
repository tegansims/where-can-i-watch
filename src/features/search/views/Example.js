import React from "react"
import SearchContainer from "../containers/Search"
import BaseLayout from "../../../layouts/BaseLayout"

const Search = ({ route, navigation }) => {
  const { params } = route
  return (
    <BaseLayout>
      <SearchContainer search={params} navigation={navigation}/>
    </BaseLayout>
  )
}

export default Search
