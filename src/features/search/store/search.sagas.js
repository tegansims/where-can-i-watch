import { takeLatest, put, call } from "redux-saga/effects"

import { SearchService, SearchActions } from ".."

const MOCK_RES = {
  data: {
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
}

const MOCK_DETAILS_RES = {
  data: {
    id: "/title/tt0436992/",
    title: {
      "@type": "imdb.api.title.title",
      id: "/title/tt0436992/",
      image: {
        height: 1500,
        id: "/title/tt0436992/images/rm808881153",
        url:
          "https://m.media-amazon.com/images/M/MV5BZWJhYjFmZDEtNTVlYy00NGExLWJhZWItNTAxODY5YTc3MDFmXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
        width: 1061
      },
      runningTimeInMinutes: 45,
      nextEpisode: "/title/tt0562992/",
      numberOfEpisodes: 190,
      seriesStartYear: 2005,
      title: "Doctor Who",
      titleType: "tvSeries",
      year: 2005
    },
    certificates: {
      US: [
        {
          certificate: "TV-PG",
          country: "US"
        }
      ]
    },
    ratings: {
      canRate: true,
      rating: 8.6,
      ratingCount: 196607,
      otherRanks: [
        {
          id: "/chart/ratings/toptv",
          label: "Top 250 TV",
          rank: 195,
          rankType: "topTv"
        }
      ]
    },
    genres: ["Adventure", "Drama", "Family", "Mystery", "Sci-Fi"],
    releaseDate: "2006-03-17",
    plotOutline: {
      id: "/title/tt0436992/plot/po1029503",
      text:
        "The further adventures in time and space of the alien adventurer known as the Doctor and their companions from planet Earth."
    },
    plotSummary: {
      author: "Chris Wright",
      id: "/title/tt0436992/plot/ps2240416",
      text:
        "The Doctor, a Time Lord/Lady from the race whose home planet is Gallifrey, travels through time and space in their ship the T.A.R.D.I.S. (an acronym for Time and Relative Dimension In Space) with numerous companions. From time to time The Doctor regenerates into a new form (which is how the series has been running since the departure of the original actor, William Hartnell, in 1966)."
    }
  }
}

const res2 = {
  data: {
    certificates: {
      US: [
        {
          certificate: "TV-MA",
          country: "US"
        }
      ]
    },
    genres: ["Drama"],
    id: "/title/tt7660850/",
    plotOutline: {
      author: "pravinhalmare-95852",
      id: "/title/tt7660850/plot/po5330828",
      text:
        "The Roy family is known for controlling the biggest media and entertainment company in the world. However, their world changes when their father steps down from the company."
    },
    ratings: {
      canRate: true,
      otherRanks: [
        {
          id: "/chart/ratings/toptv",
          label: "Top 250 TV",
          rank: 161,
          rankType: "topTv"
        }
      ],
      rating: 8.6,
      ratingCount: 38156
    },
    releaseDate: "2018-06-03",
    title: {
      "@type": "imdb.api.title.title",
      id: "/title/tt7660850/",
      image: {
        height: 1481,
        id: "/title/tt7660850/images/rm2038144001",
        url:
          "https://m.media-amazon.com/images/M/MV5BZDMyY2I0ZjEtMzc4Yi00MTQxLWI1MWYtOWJjNjIwMTMyYWFjXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
        width: 1000
      },
      nextEpisode: "/title/tt5791038/",
      numberOfEpisodes: 21,
      runningTimeInMinutes: 60,
      seriesStartYear: 2018,
      title: "Succession",
      titleType: "tvSeries",
      year: 2018
    }
  }
}

export function* loadSearchSaga(action) {
  try {
    const res = yield call(SearchService.loadSearch, {
      searchTerm: action.payload
    })
    // const res = MOCK_RES
    if (res) yield put(SearchActions.searchSuccess(res.data))
    else yield put(SearchActions.searchFail())
  } catch (err) {
    console.log(err)
    yield put(SearchActions.searchFail())
  }
}

export function* loadDetailsSaga(action) {
  try {
    // const res = MOCK_DETAILS_RES
    // const res = res2
    const res = yield call(SearchService.loadDetails, { id: action.payload })

    if (res) yield put(SearchActions.loadDetailsSuccess(res.data))
    else yield put(SearchActions.loadDetailsFail())
  } catch (err) {
    console.log(err)
    yield put(SearchActions.loadDetailsFail())
  }
}

export function* saga() {
  yield takeLatest(SearchActions.types.SEARCH, loadSearchSaga)
  yield takeLatest(SearchActions.types.LOAD_DETAILS, loadDetailsSaga)
}
