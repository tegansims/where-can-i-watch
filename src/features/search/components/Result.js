import React, { useState } from "react"
import { View, Image, Text, Linking } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler"
import { Divider } from "react-native-paper"
import DetailsModal from "../containers/DetailsModal"

const Result = ({ item, loadDetails, navigation }) => {
  const { name, picture, locations, external_ids } = item
  const [modalVisible, setModalVisible] = useState(false)

  const handlePress = () => {
    loadDetails(external_ids.imdb.id)
    setModalVisible(true)
  }
  return (
    <View marginBottom={12}>
      <DetailsModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        navigation={navigation}
        {...item}
      />
      <View flexDirection="row" marginBottom={18} alignItems="center">
        <Image
          source={{
            uri: picture
          }}
          style={{ height: 80, width: 80, borderRadius: 8 }}
        />
        <Text
          style={{
            fontSize: 28,
            fontWeight: "600",
            marginBottom: 12,
            paddingLeft: 14,
            flex: 1
          }}
          onPress={handlePress}
        >
          {name}
        </Text>
      </View>
      {locations?.map(loc => (
        <TouchableOpacity
          key={loc.url}
          onPress={() => Linking.openURL(loc.url)}
        >
          <Text
            style={{
              fontSize: 18,
              marginBottom: 12
            }}
          >
            {loc.display_name}
          </Text>
        </TouchableOpacity>
      ))}
      <Divider style={{ marginVertical: 4, height: 1, color: "white" }} />
    </View>
  )
}

export default Result
