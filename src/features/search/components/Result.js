import React, { useState } from "react"
import { View, Image, Text, Linking } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler"
import { Divider } from "react-native-paper"
import DetailsModal from "../containers/DetailsModal"

const holdingImage = require("../../../../assets/adaptive-icon.png")

const Result = ({ item, loadDetails }) => {
  const { name, picture, locations, external_ids } = item
  const [modalVisible, setModalVisible] = useState(false)
  const sortedLocations = locations.sort((a, b) =>
    a.display_name.localeCompare(b.display_name)
  )

  const handlePress = async () => {
    await loadDetails(external_ids.imdb.id)
    setModalVisible(true)
  }
  return (
    <>
      <DetailsModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        {...item}
      />
      <TouchableOpacity onPress={handlePress}>
        <View flexDirection="row" marginBottom={18} alignItems="center">
          <Image
            source={
              (picture && {
                uri: picture
              }) ||
              holdingImage
            }
            style={{ height: 100, width: 100, borderRadius: 8 }}
          />
          <Text
            style={{
              fontSize: 28,
              fontWeight: "600",
              paddingLeft: 14,
              flex: 1
            }}
          >
            {name}
          </Text>
        </View>
      </TouchableOpacity>
      {sortedLocations?.map((loc, index) => (
        <TouchableOpacity
          key={`${index}-${loc.url}`}
          onPress={() => Linking.openURL(loc.url)}
        >
          <Text
            style={{
              fontSize: 20,
              marginBottom: 12
            }}
          >
            {loc.display_name}
          </Text>
        </TouchableOpacity>
      ))}
      <Divider style={{ marginVertical: 12, height: 1, color: "white" }} />
    </>
  )
}

export default Result
