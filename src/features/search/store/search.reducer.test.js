import { reducer, initialState } from "./search.reducer"
import * as Actions from "./search.actions"

const SEARCH_TERM = "paddington"
const SEARCH_RESULTS = [
  {
    name: "Paddington 2",
    picture:
      "https://utellyassets9-1.imgix.net/api/Images/8f83f8e5fc5df7fb078827f67659f858/Redirect?fit=crop&auto=compress&crop=faces,top",
    locations: [
      {
        icon:
          "https://utellyassets7.imgix.net/locations_icons/utelly/black_new/GooglePlayIVAGB.png?w=92&auto=compress&app_version=393b9d13-cf56-4e48-9959-cc873c5f4c9d_e12122020-12-28",
        display_name: "Google Play",
        url:
          "https://play.google.com/store/movies/details/Paddington_2?gl=GB&hl=en&id=Yo5tQKUkk3o"
      },
      {
        icon:
          "https://utellyassets7.imgix.net/locations_icons/utelly/black_new/AmazonInstantVideoIVAGB.png?w=92&auto=compress&app_version=393b9d13-cf56-4e48-9959-cc873c5f4c9d_e12122020-12-28",
        display_name: "Amazon Instant Video",
        url:
          "https://watch.amazon.co.uk/detail?asin=B07B5CY55L&creativeASIN=B07B5CY55L&ie=UTF8&linkCode=xm2&tag=utellycom00-21"
      },
      {
        icon:
          "https://utellyassets7.imgix.net/locations_icons/utelly/black_new/iTunesIVAGB.png?w=92&auto=compress&app_version=393b9d13-cf56-4e48-9959-cc873c5f4c9d_e12122020-12-28",
        display_name: "iTunes",
        url: "https://itunes.apple.com/gb/movie/paddington-2/id1303816055"
      }
    ],
    external_ids: {
      imdb: {
        url: "https://www.imdb.com/title/tt4468740",
        id: "tt4468740"
      }
    }
  },
  {
    name: "Paddington Bear",
    picture:
      "https://utellyassets9-1.imgix.net/api/Images/f37279346f4ff8e9c16a66fbb3a85c7f/Redirect?fit=crop&auto=compress&crop=faces,top",
    locations: [
      {
        icon:
          "https://utellyassets7.imgix.net/locations_icons/utelly/black_new/AmazonPrimeVideoIVAGB.png?w=92&auto=compress&app_version=393b9d13-cf56-4e48-9959-cc873c5f4c9d_e12122020-12-28",
        display_name: "Amazon Prime Video",
        url:
          "https://watch.amazon.co.uk/detail?asin=B00UUGR39A&creativeASIN=B00UUGR39A&ie=UTF8&linkCode=xm2&tag=utellycom00-21"
      },
      {
        icon:
          "https://utellyassets7.imgix.net/locations_icons/utelly/black_new/iTunesIVAGB.png?w=92&auto=compress&app_version=393b9d13-cf56-4e48-9959-cc873c5f4c9d_e12122020-12-28",
        display_name: "iTunes",
        url: "https://itunes.apple.com/gb/movie/paddington/id933951772"
      },
      {
        icon:
          "https://utellyassets7.imgix.net/locations_icons/utelly/black_new/GooglePlayIVAGB.png?w=92&auto=compress&app_version=393b9d13-cf56-4e48-9959-cc873c5f4c9d_e12122020-12-28",
        display_name: "Google Play",
        url:
          "https://play.google.com/store/movies/details/Paddington?gl=GB&hl=en&id=p--Qfz_W9fI"
      },
      {
        icon:
          "https://utellyassets7.imgix.net/locations_icons/utelly/black_new/AmazonInstantVideoIVAGB.png?w=92&auto=compress&app_version=393b9d13-cf56-4e48-9959-cc873c5f4c9d_e12122020-12-28",
        display_name: "Amazon Instant Video",
        url:
          "https://watch.amazon.co.uk/detail?asin=B00UUGR39A&creativeASIN=B00UUGR39A&ie=UTF8&linkCode=xm2&tag=utellycom00-21"
      }
    ],
    external_ids: {
      imdb: {
        url: "https://www.imdb.com/title/tt1109624",
        id: "tt1109624"
      }
    }
  },
  {
    name: "The Adventures of Paddington Bear",
    picture:
      "https://utellyassets9-1.imgix.net/api/Images/99fe93a15d2dd55c1555ba8058c864f2/Redirect?fit=crop&auto=compress&crop=faces,top",
    locations: [
      {
        icon:
          "https://utellyassets7.imgix.net/locations_icons/utelly/black_new/GooglePlayIVAGB.png?w=92&auto=compress&app_version=393b9d13-cf56-4e48-9959-cc873c5f4c9d_e12122020-12-28",
        display_name: "Google Play",
        url:
          "https://play.google.com/store/tv/show?amp=&amp=&cdid=tvseason-63M0BooDIB9U2Wftf5JJIQ&gdid=tvepisode-mO4pz33Ex8A&gl=GB&hl=en&id=LEew6VaMxoE"
      },
      {
        icon:
          "https://utellyassets7.imgix.net/locations_icons/utelly/black_new/AmazonInstantVideoIVAGB.png?w=92&auto=compress&app_version=393b9d13-cf56-4e48-9959-cc873c5f4c9d_e12122020-12-28",
        display_name: "Amazon Instant Video",
        url:
          "https://watch.amazon.co.uk/detail?asin=B00ETA19MU&creativeASIN=B00ETA19MU&ie=UTF8&linkCode=xm2&tag=utellycom00-21"
      },
      {
        icon:
          "https://utellyassets7.imgix.net/locations_icons/utelly/black_new/iTunesIVAGB.png?w=92&auto=compress&app_version=393b9d13-cf56-4e48-9959-cc873c5f4c9d_e12122020-12-28",
        display_name: "iTunes",
        url:
          "https://itunes.apple.com/gb/tv-season/case-doubtful-dummy-greatest-paddington-on-earth-paddington/id1010883037?i=1012100460"
      }
    ],
    external_ids: {
      imdb: {
        url: "https://www.imdb.com/title/tt0314975",
        id: "tt0314975"
      }
    }
  }
]

const LOADING_STATE = { ...initialState, isLoading: true }
const IMDB_ID = "tt4468740"

const DETAILS_RESULTS = {
    id: "/title/tt4468740/",
    title: "Paddington 2",
    releaseDate: "2018-01-12",
    plotOutline:
      "Paddington (Ben Whishaw), now happily settled with the Brown family and a popular member of the local community, picks up a series of odd jobs to buy the perfect present for his Aunt Lucy's (Imelda Staunton's) 100th birthday, only for the gift to be stolen.",
    plotSummary:
      "Paddington (Ben Whishaw) is happily settled with the Brown family in Windsor Gardens, where he has become a popular member of the community, spreading joy and marmalade wherever he goes. While searching for the perfect present for his beloved Aunt Lucy's (Imelda Staunton's) 100th birthday, Paddington spots a unique pop-up book in Mr. Gruber's antique shop, and embarks upon a series of odd jobs to buy it. But when the book is stolen, it's up to Paddington and the Browns to unmask the thief.",
    image:
      "https://m.media-amazon.com/images/M/MV5BMmYwNWZlNzEtNjE4Zi00NzQ4LWI2YmUtOWZhNzZhZDYyNmVmXkEyXkFqcGdeQXVyNzYzODM3Mzg@._V1_.jpg"
  }

describe("[Search] Reducer", () => {
  let result

  describe("Loading a set of search term results", () => {
    it("Sets the loading flag to true", () => {
      result = reducer(initialState, Actions.search(SEARCH_TERM))
      expect(result.isLoading).toBe(true)
    })
    it("Clears the error flag", () => {
      result = reducer(initialState, Actions.search(SEARCH_TERM))
      expect(result.hasError).toBe(false)
    })
  })

  describe("Loads search results successfully", () => {
    beforeEach(() => {
      result = reducer(LOADING_STATE, Actions.searchSuccess(SEARCH_RESULTS))
    })
    it("Sets the loading flag to false", () => {
      expect(result.isLoading).toBe(false)
    })

    it("Sets the error flag to false", () => {
      expect(result.hasError).toBe(false)
    })
    it("Saves the search's content to the state", () => {
      expect(result.searchResults).toEqual(
        SEARCH_RESULTS
      )
    })
  })

  describe("Unsuccessful Loading Search Results", () => {
    beforeEach(() => {
      result = reducer(LOADING_STATE, Actions.searchFail())
    })

    it("Sets the loading flag to false", () => {
      expect(result.isLoading).toBe(false)
    })

    it("Sets the error flag to true", () => {
      expect(result.hasError).toBe(true)
    })
  })

  describe("Loading details", () => {
    it("Sets the details loading flag to true", () => {
      result = reducer(initialState, Actions.loadDetails(IMDB_ID))
      expect(result.isLoadingDetails).toBe(true)
    })
    it("Clears the details error flag", () => {
      result = reducer(initialState, Actions.loadDetails(IMDB_ID))
      expect(result.hasErrorDetails).toBe(false)
    })
  })

  describe("Loads details successfully", () => {
      beforeEach(()=> {
        result = reducer(LOADING_STATE, Actions.loadDetailsSuccess(DETAILS_RESULTS))
      })
      it("Sets the loading details flag to false", () => {
        expect(result.isLoadingDetails).toBe(false)
      })
      it("Sets the error details flag to false", () => {
        expect(result.hasErrorDetails).toBe(false)
      })
      it("Saves the detail's content to the state", () => {
        expect(result.details).toEqual(
          DETAILS_RESULTS
        )
      })
  })

  describe("Unsuccessful Loading Details Results", () => {
    beforeEach(() => {
      result = reducer(LOADING_STATE, Actions.loadDetailsFail())
    })

    it("Sets the loading details flag to false", () => {
      expect(result.isLoadingDetails).toBe(false)
    })

    it("Sets the error details flag to true", () => {
      expect(result.hasErrorDetails).toBe(true)
    })
  })
})

