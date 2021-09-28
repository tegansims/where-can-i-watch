import React, { useRef, useState } from "react"
import {
  View,
  StyleSheet,
  Image,
  Animated,
  TouchableOpacity,
  Text,
  Dimensions
} from "react-native"
import { IconButton } from "react-native-paper"

const windowWidth = Dimensions.get("window").width
const windowHeight = Dimensions.get("window").height

const FlipCard = ({ details, image, modalVisible, setModalVisible }) => {
  const animatedValue = useRef(new Animated.Value(0)).current
  const [value, setValue] = useState(0)
  const flipCard = () => {
    if (value >= 90) {
      setValue(0)
      Animated.spring(animatedValue, {
        toValue: 0,
        friction: 8,
        tension: 10,
        useNativeDriver: true
      }).start()
    } else {
      setValue(180)
      Animated.spring(animatedValue, {
        toValue: 180,
        friction: 8,
        tension: 10,
        useNativeDriver: true
      }).start()
    }
  }

  const frontInterpolate = animatedValue.interpolate({
    inputRange: [0, 180],
    outputRange: ["0deg", "180deg"]
  })
  const backInterpolate = animatedValue.interpolate({
    inputRange: [0, 180],
    outputRange: ["180deg", "360deg"]
  })
  const frontOpacity = animatedValue.interpolate({
    inputRange: [89, 90],
    outputRange: [1, 0]
  })

  const backOpacity = animatedValue.interpolate({
    inputRange: [89, 90],
    outputRange: [0, 1]
  })

  const frontAnimatedStyle = {
    transform: [{ rotateY: frontInterpolate }]
  }
  const backAnimatedStyle = {
    transform: [{ rotateY: backInterpolate }]
  }
  const formatDate = date => date.slice(0, 4)

  const Icons = () => (
    <View alignSelf="flex-end">
      <View flexDirection="row">
        <IconButton
          icon="rotate-3d-variant"
          color="black"
          size={30}
          onPress={flipCard}
        />
        <IconButton
          icon="close"
          color="black"
          size={30}
          onPress={() => setModalVisible(!modalVisible)}
        />
      </View>
    </View>
  )

  return (
    <>
      <Icons />
      <View style={styles.container}>
        <Animated.ScrollView
          style={[frontAnimatedStyle, { opacity: frontOpacity }]}
        >
          <View style={[styles.flipCard, styles.squareCardContainer]}>
            <TouchableOpacity
              onPress={flipCard}
              style={styles.squareCardContainer}
            >
              <Image source={image} style={styles.image} />
            </TouchableOpacity>
          </View>
        </Animated.ScrollView>
        <Animated.ScrollView
          style={[
            backAnimatedStyle,
            styles.flipCardBack,
            { opacity: backOpacity }
          ]}
          showsVerticalScrollIndicator={false}
        >
          <View style={[styles.flipCard, styles.squareCardContainer]}>
            <TouchableOpacity
              onPress={flipCard}
              style={styles.squareCardContainer}
            >
              <Text style={{ ...styles.modalText, fontSize: 28 }}>
                {details?.title}
                <Text style={{ ...styles.modalText, fontSize: 22 }}>
                  {" "}
                  ({formatDate(details?.releaseDate)})
                </Text>
              </Text>
              <Text
                style={{ ...styles.modalText, fontSize: 18, lineHeight: 20 }}
              >
                {details?.plotOutline}
              </Text>
              <Text style={{ ...styles.modalText, fontSize: 16 }}>
                {details?.plotSummary}
              </Text>
            </TouchableOpacity>
          </View>
        </Animated.ScrollView>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1
  },
  squareCardContainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1
  },
  flipCard: {
    backfaceVisibility: "hidden"
  },
  flipCardBack: {
    position: "absolute",
    top: 0,
    height: windowHeight * 0.5
  },
  image: {
    flex: 1,
    height: windowHeight * 0.5,
    width: windowWidth * 0.75,
    borderRadius: 4
  },
  modalText: {
    fontWeight: "600",
    marginBottom: 12,
    textAlign: "center",
    color: "black"
  }
})

export default FlipCard
