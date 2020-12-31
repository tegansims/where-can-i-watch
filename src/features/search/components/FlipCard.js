import React, { useRef, useState } from "react"
import {
  View,
  StyleSheet,
  Image,
  Animated,
  TouchableOpacity,
  Text
} from "react-native"
import { ScrollView } from "react-native-gesture-handler"

const FlipCard = ({ details, image }) => {
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

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.flipCard,
          styles.squareCardContainer,
          frontAnimatedStyle,
          { opacity: frontOpacity }
        ]}
      >
        <TouchableOpacity onPress={flipCard} style={styles.squareCardContainer}>
          <ScrollView>
            <Text style={{ ...styles.modalText, fontSize: 28 }}>
              {details?.title}
              <Text style={{ ...styles.modalText, fontSize: 22 }}>
                {" "}
                ({formatDate(details?.releaseDate)})
              </Text>
            </Text>
            <Text style={{ ...styles.modalText, fontSize: 18, lineHeight: 20 }}>
              {details?.plotOutline}
            </Text>
            <Text style={{ ...styles.modalText, fontSize: 16 }}>
              {details?.plotSummary}
            </Text>
          </ScrollView>
        </TouchableOpacity>
      </Animated.View>
      <Animated.View
        style={[
          backAnimatedStyle,
          styles.squareCardContainer,
          styles.flipCard,
          styles.flipCardBack,
          { opacity: backOpacity }
        ]}
      >
        <TouchableOpacity
          onPress={flipCard}
          style={[styles.squareCardContainer, { backgroundColor: "#FC515A" }]}
        >
          <Image source={image} style={styles.image} />
        </TouchableOpacity>
      </Animated.View>
    </View>
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
    height: "100%",
    width: "100%"
  },
  flipCard: {
    backfaceVisibility: "hidden"
  },
  flipCardBack: {
    position: "absolute",
    top: 0
  },
  image: {
    flex: 1,
    height: "100%",
    width: "100%",
    borderRadius: 4,
    resizeMode: "cover"
  },
  modalText: {
    fontWeight: "600",
    marginBottom: 12,
    textAlign: "center",
    color: "black"
  }
})

export default FlipCard
