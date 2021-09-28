import React from "react"
import { Title } from "react-native-paper"
import { Text, StyleSheet, Linking, ScrollView } from "react-native"
import BaseLayout from "../../../layouts/BaseLayout"

const services = [
  "All 4",
  "Amazon Instant",
  "Amazon Prime",
  "BBC Iplayer",
  "Google Play",
  "iTunes",
  "ITV Hub",
  "My 5",
  "Netflix",
  "Now TV",
  "Rakuten TV",
  "TalkTalk TV Store"
]

const LinkedText = ({ link, children }) => (
  <Text
    style={{ ...styles.text, fontFamily: "Karla_700Bold" }}
    onPress={() => Linking.openURL(link)}
  >
    {children}
  </Text>
)

const AboutComponent = () => (
  <BaseLayout>
    <ScrollView
      justifyContent="center"
      flex={1}
      showsVerticalScrollIndicator={false}
    >
      <Title
        style={{
          fontFamily: "Karla_700Bold",
          fontSize: 32,
          textAlign: "center",
          paddingTop: 48,
          paddingBottom: 24,
          lineHeight: 50,
          color: "white"
        }}
      >
        About this app
      </Title>
      <Text style={styles.text}>
        Utilizing both the
        <LinkedText link="https://rapidapi.com/utelly/api/utelly/details">
          {" "}
          Utelly{" "}
        </LinkedText>
        and
        <LinkedText link="https://rapidapi.com/apidojo/api/imdb8/details">
          {" "}
          IMDb{" "}
        </LinkedText>
        APIs, this app searches across multiple Video on Demand services to let
        you know exactly where you can watch that thing you wanted to watch
        tonight!
      </Text>
      <Text style={styles.text}>Services this app searches include:</Text>
      {services.map(service => (
        <Text key={service} style={{ ...styles.text, paddingLeft: 12 }}>
          • {service}
        </Text>
      ))}
    </ScrollView>
  </BaseLayout>
)

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    paddingBottom: 12
  }
})

export default AboutComponent
