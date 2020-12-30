import * as Selectors from "./search.selectors"

const STATE = {
  search: {
    isLoading: false,
    hasError: false,
    searchResults: [
      {
        name: "Paddington 2",
        picture:
          "https://utellyassets9-1.imgix.net/api/Images/8f83f8e5fc5df7fb078827f67659f858/Redirect?fit=crop&auto=compress&crop=faces,top",
        locations: [
          {
            icon:
              "https://utellyassets7.imgix.net/locations_icons/utelly/black_new/AmazonInstantVideoIVAGB.png?w=92&auto=compress&app_version=393b9d13-cf56-4e48-9959-cc873c5f4c9d_e12122020-12-28",
            display_name: "Amazon Instant Video",
            url:
              "https://watch.amazon.co.uk/detail?asin=B07B5CY55L&creativeASIN=B07B5CY55L&ie=UTF8&linkCode=xm2&tag=utellycom00-21"
          },
          {
            icon:
              "https://utellyassets7.imgix.net/locations_icons/utelly/black_new/GooglePlayIVAGB.png?w=92&auto=compress&app_version=393b9d13-cf56-4e48-9959-cc873c5f4c9d_e12122020-12-28",
            display_name: "Google Play",
            url:
              "https://play.google.com/store/movies/details/Paddington_2?gl=GB&hl=en&id=Yo5tQKUkk3o"
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
              "https://utellyassets7.imgix.net/locations_icons/utelly/black_new/AmazonInstantVideoIVAGB.png?w=92&auto=compress&app_version=393b9d13-cf56-4e48-9959-cc873c5f4c9d_e12122020-12-28",
            display_name: "Amazon Instant Video",
            url:
              "https://watch.amazon.co.uk/detail?asin=B00UUGR39A&creativeASIN=B00UUGR39A&ie=UTF8&linkCode=xm2&tag=utellycom00-21"
          },
          {
            icon:
              "https://utellyassets7.imgix.net/locations_icons/utelly/black_new/AmazonPrimeVideoIVAGB.png?w=92&auto=compress&app_version=393b9d13-cf56-4e48-9959-cc873c5f4c9d_e12122020-12-28",
            display_name: "Amazon Prime Video",
            url:
              "https://watch.amazon.co.uk/detail?asin=B00UUGR39A&creativeASIN=B00UUGR39A&ie=UTF8&linkCode=xm2&tag=utellycom00-21"
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
              "https://utellyassets7.imgix.net/locations_icons/utelly/black_new/iTunesIVAGB.png?w=92&auto=compress&app_version=393b9d13-cf56-4e48-9959-cc873c5f4c9d_e12122020-12-28",
            display_name: "iTunes",
            url: "https://itunes.apple.com/gb/movie/paddington/id933951772"
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
              "https://utellyassets7.imgix.net/locations_icons/utelly/black_new/AmazonInstantVideoIVAGB.png?w=92&auto=compress&app_version=393b9d13-cf56-4e48-9959-cc873c5f4c9d_e12122020-12-28",
            display_name: "Amazon Instant Video",
            url:
              "https://watch.amazon.co.uk/detail?asin=B00ETA19MU&creativeASIN=B00ETA19MU&ie=UTF8&linkCode=xm2&tag=utellycom00-21"
          },
          {
            icon:
              "https://utellyassets7.imgix.net/locations_icons/utelly/black_new/GooglePlayIVAGB.png?w=92&auto=compress&app_version=393b9d13-cf56-4e48-9959-cc873c5f4c9d_e12122020-12-28",
            display_name: "Google Play",
            url:
              "https://play.google.com/store/tv/show?amp=&amp=&cdid=tvseason-63M0BooDIB9U2Wftf5JJIQ&gdid=tvepisode-mO4pz33Ex8A&gl=GB&hl=en&id=LEew6VaMxoE"
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
    ],
    details: {
      id: "/title/tt4468740/",
      title: "Paddington 2",
      releaseDate: "2018-01-12",
      plotOutline:
        "Paddington (Ben Whishaw), now happily settled with the Brown family and a popular member of the local community, picks up a series of odd jobs to buy the perfect present for his Aunt Lucy's (Imelda Staunton's) 100th birthday, only for the gift to be stolen.",
      plotSummary:
        "Paddington (Ben Whishaw) is happily settled with the Brown family in Windsor Gardens, where he has become a popular member of the community, spreading joy and marmalade wherever he goes. While searching for the perfect present for his beloved Aunt Lucy's (Imelda Staunton's) 100th birthday, Paddington spots a unique pop-up book in Mr. Gruber's antique shop, and embarks upon a series of odd jobs to buy it. But when the book is stolen, it's up to Paddington and the Browns to unmask the thief.",
      image:
        "https://m.media-amazon.com/images/M/MV5BMmYwNWZlNzEtNjE4Zi00NzQ4LWI2YmUtOWZhNzZhZDYyNmVmXkEyXkFqcGdeQXVyNzYzODM3Mzg@._V1_.jpg"
    },
    isLoadingDetails: false,
    hasErrorDetails: false
  }
}

const FAILED_LOADING_STATE = {
  search: {
    isLoading: false,
    hasError: true,
    searchResults: {},
    details: {},
    isLoadingDetails: false,
    hasErrorDetails: false
  }
}

const FAILED_DETAILS_STATE = {
  search: {
    isLoading: false,
    hasError: false,
    searchResults: {},
    details: {},
    isLoadingDetails: false,
    hasErrorDetails: true
  }
}

describe("[Search] Selectors", () => {
  let result

  describe("#getIsLoading", () => {
    it("returns the loading status", () => {
      result = Selectors.getIsLoading(STATE)
      expect(result).toBe(false)
    })
  })

  describe("#getHasError", () => {
    it("returns the error status", () => {
      result = Selectors.getHasError(STATE)
      expect(result).toBe(false)
    })
  })

  describe("#getSearchResults", () => {
    beforeEach(() => {
      result = Selectors.getSearchResults(STATE)
    })
    it("returns the expected search results", () => {
      expect(result).toEqual(STATE.search.searchResults)
    })
    it("returns the expected shape", () => {
      expect(result).toEqual(
        expect.arrayContaining([
          expect.objectContaining({ name: "Paddington 2" })
        ])
      )
    })
    it("returns the expected shape of locations", () => {
      expect(result).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            locations: expect.arrayContaining([
              expect.objectContaining({
                icon:
                  "https://utellyassets7.imgix.net/locations_icons/utelly/black_new/AmazonInstantVideoIVAGB.png?w=92&auto=compress&app_version=393b9d13-cf56-4e48-9959-cc873c5f4c9d_e12122020-12-28",
                display_name: "Amazon Instant Video",
                url:
                  "https://watch.amazon.co.uk/detail?asin=B07B5CY55L&creativeASIN=B07B5CY55L&ie=UTF8&linkCode=xm2&tag=utellycom00-21"
              })
            ])
          })
        ])
      )
    })
    it("returns the imdb url and id", () => {
      expect(result).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            external_ids: expect.objectContaining({
              imdb: {
                url: "https://www.imdb.com/title/tt4468740",
                id: "tt4468740"
              }
            })
          })
        ])
      )
    })
  })

  describe("#getDetails", () => {
    it("returns the expected details results", () => {
      result = Selectors.getDetails(STATE)
      expect(result).toEqual(STATE.search.details)
    })
  })
  describe("#getIsLoadingDetails", () => {
    it("returns the loading status", () => {
      result = Selectors.getIsLoadingDetails(STATE)
      expect(result).toBe(false)
    })
  })

  describe("#getHasErrorDetails", () => {
    it("returns the error status", () => {
      result = Selectors.getHasErrorDetails(STATE)
      expect(result).toBe(false)
    })
  })
})

describe("[Search] Selectors loading failed", () => {
  let result

  describe("#getIsLoading", () => {
    it("returns the loading status", () => {
      result = Selectors.getIsLoading(FAILED_LOADING_STATE)
      expect(result).toBe(false)
    })
  })

  describe("#getHasError", () => {
    it("returns the error status", () => {
      result = Selectors.getHasError(FAILED_LOADING_STATE)
      expect(result).toBe(true)
    })
  })
})

describe("[Search] Selectors loading details failed", () => {
  let result

  describe("#getIsLoadingDetails", () => {
    it("returns the loading status", () => {
      result = Selectors.getIsLoadingDetails(FAILED_DETAILS_STATE)
      expect(result).toBe(false)
    })
  })

  describe("#getHasErrorDetails", () => {
    it("returns the error status", () => {
      result = Selectors.getHasErrorDetails(FAILED_DETAILS_STATE)
      expect(result).toBe(true)
    })
  })
})
