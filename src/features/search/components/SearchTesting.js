import React, { useState } from "react"
import { TextInput, Title } from "react-native-paper"
import { View, Button, Text, Linking } from "react-native"
import BaseLayout from "../../../layouts/BaseLayout"
import { useFonts, Karla_700Bold } from "@expo-google-fonts/karla"

const res = {
  results: [
    {
      id: "5d914097302b840050acdd36",
      picture:
        "https://utellyassets9-1.imgix.net/api/Images/77c8051e90a3327f25048b49a4e51fa1/Redirect",
      name: "Dr. Who",
      locations: [
        {
          icon:
            "https://utellyassets7.imgix.net/locations_icons/utelly/black_new/iTunesIVAGB.png?w=92&auto=compress&app_version=8bc263d1-dd7b-40c0-98cd-f677eb14d81e_e12122020-10-28",
          display_name: "iTunes",
          name: "iTunesIVAGB",
          id: "5d8415b3ca549f00528a99f0",
          url:
            "https://itunes.apple.com/gb/tv-season/world-war-three/id284192420?i=284480172"
        },
        {
          icon:
            "https://utellyassets7.imgix.net/locations_icons/utelly/black_new/GooglePlayIVAGB.png?w=92&auto=compress&app_version=8bc263d1-dd7b-40c0-98cd-f677eb14d81e_e12122020-10-28",
          display_name: "Google Play",
          name: "GooglePlayIVAGB",
          id: "5d84d6dcd95dc7385f6a43e1",
          url:
            "https://play.google.com/store/tv/show?amp=&amp=&cdid=tvseason-EINFQoUr4pWExX_61AUH4A&gdid=tvepisode-MTPJF_TzmA0&gl=GB&hl=en&id=VMCl2AGI4LQ"
        },
        {
          icon:
            "https://utellyassets7.imgix.net/locations_icons/utelly/black_new/AmazonInstantVideoIVAGB.png?w=92&auto=compress&app_version=8bc263d1-dd7b-40c0-98cd-f677eb14d81e_e12122020-10-28",
          display_name: "Amazon Instant Video",
          name: "AmazonInstantVideoIVAGB",
          id: "5d8415b31e1521005490e1bc",
          url:
            "https://watch.amazon.co.uk/detail?asin=B08HVYGDQD&creativeASIN=B08HVYGDQD&ie=UTF8&linkCode=xm2&tag=utellycom00-21"
        },
        {
          icon:
            "https://utellyassets7.imgix.net/locations_icons/utelly/black_new/NetflixIVAGB.png?w=92&auto=compress&app_version=8bc263d1-dd7b-40c0-98cd-f677eb14d81e_e12122020-10-28",
          display_name: "Netflix",
          name: "NetflixIVAGB",
          id: "5d84d6e2d95dc7385f6a442d",
          url: "https://www.netflix.com/title/70072147"
        }
      ],
      provider: "iva",
      weight: 9863,
      external_ids: {
        iva_rating: null,
        imdb: {
          url: "https://www.imdb.com/title/tt0436992",
          id: "tt0436992"
        },
        tmdb: {
          url: "https://www.themoviedb.org/tv/57243",
          id: "57243"
        },
        wiki_data: null,
        iva: {
          id: "976847"
        },
        gracenote: null,
        rotten_tomatoes: null,
        facebook: null
      }
    },
    {
      id: "5e2ce07190c0e033a487d6ea",
      picture:
        "https://utellyassets9-1.imgix.net/api/Images/2de16403148f32f03fc4c87dce9244d8/Redirect",
      name: "Dr. Who 2 - Daleks Invasion Earth 2150 A.D.",
      locations: [
        {
          icon:
            "https://utellyassets7.imgix.net/locations_icons/utelly/black_new/GooglePlayIVAGB.png?w=92&auto=compress&app_version=8bc263d1-dd7b-40c0-98cd-f677eb14d81e_e12122020-10-28",
          display_name: "Google Play",
          name: "GooglePlayIVAGB",
          id: "5d84d6dcd95dc7385f6a43e1",
          url:
            "https://play.google.com/store/movies/details/Daleks_Invasion_Earth_2150_A_D?gl=GB&hl=en&id=NIMqPOoPLWk"
        },
        {
          icon:
            "https://utellyassets7.imgix.net/locations_icons/utelly/black_new/AmazonInstantVideoIVAGB.png?w=92&auto=compress&app_version=8bc263d1-dd7b-40c0-98cd-f677eb14d81e_e12122020-10-28",
          display_name: "Amazon Instant Video",
          name: "AmazonInstantVideoIVAGB",
          id: "5d8415b31e1521005490e1bc",
          url:
            "https://watch.amazon.co.uk/detail?asin=B00M7A25R2&creativeASIN=B00M7A25R2&ie=UTF8&linkCode=xm2&tag=utellycom00-21"
        },
        {
          icon:
            "https://utellyassets7.imgix.net/locations_icons/utelly/black_new/iTunesIVAGB.png?w=92&auto=compress&app_version=8bc263d1-dd7b-40c0-98cd-f677eb14d81e_e12122020-10-28",
          display_name: "iTunes",
          name: "iTunesIVAGB",
          id: "5d8415b3ca549f00528a99f0",
          url:
            "https://itunes.apple.com/gb/movie/daleks-invasion-earth-2150-a-d/id895846176"
        }
      ],
      provider: "iva",
      weight: 0,
      external_ids: {
        iva_rating: null,
        imdb: {
          url: "https://www.imdb.com/title/tt0060278",
          id: "tt0060278"
        },
        tmdb: {
          url: "https://www.themoviedb.org/movie/16387",
          id: "16387"
        },
        wiki_data: {
          url: "https://www.wikidata.org/wiki/Q3231896",
          id: "Q3231896"
        },
        iva: null,
        gracenote: null,
        rotten_tomatoes: null,
        facebook: null
      }
    }
  ],
  updated: "2020-10-28T05:09:23+0000",
  term: "dr who",
  status_code: 200,
  variant: "ivafull"
}

const ResultsDisplay = ({ name, locations }) => {
  return (
    <View>
      <Text
        style={{
          fontSize: 18,
          fontWeight: "600"
        }}
      >
        {name}
      </Text>
      {locations &&
        locations.map(loc => (
          <Button
            title={loc.display_name}
            onPress={() => Linking.openURL(loc.url)}
          />
        ))}
    </View>
  )
}

const Testing = () => {
  let [fontsLoaded] = useFonts({
    Karla_700Bold
  })
  const [searchTerm, setSearchTerm] = useState("")
  const [results, setResults] = useState(res)

  const handleSubmit = () =>
    fetch(
      `https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/lookup?term=${searchTerm}&country=uk`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host":
            "utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com",
          "x-rapidapi-key": "e2d554ecb8msh62122a83b015e31p126344jsn549fa3908955"
        }
      }
    )
      .then(resp => resp.json())
      .then(response => {
        setResults(response)
      })
      .catch(err => {
        console.log(err)
      })
  if (!fontsLoaded) return null
  return (
    <BaseLayout>
      <Title style={{ fontFamily: "Karla_700Bold" }}>
        What are you looking to watch today?
      </Title>
      <TextInput
        onChangeText={text => setSearchTerm(text)}
        value={searchTerm}
      />
      <Button
        onPress={() => handleSubmit(searchTerm)}
        title="Search"
        color="#841584"
        accessibilityLabel="Search for TV shows or films"
      />
      {results &&
        results.results &&
        results.results.map(result => (
          <ResultsDisplay key={result.name} {...result} />
        ))}
    </BaseLayout>
  )
}

export default Testing
