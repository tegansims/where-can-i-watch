/* eslint-disable no-return-assign */
import {
  ApolloClient,
  InMemoryCache,
  from,
  split,
  HttpLink
} from "@apollo/client"
import { WebSocketLink } from "@apollo/client/link/ws"
import { getMainDefinition } from "@apollo/client/utilities"
import { onError } from "@apollo/client/link/error"
import { setContext } from "@apollo/client/link/context"
// import Auth from "./src/features/account/lib/CognitoAuthorizer"

// const url =
//   "https://zrgdryvdvjfrlly35okfx6at74.appsync-api.eu-west-2.amazonaws.com/graphql"
// const realtimeUrl =
//   "wss://zrgdryvdvjfrlly35okfx6at74.appsync-realtime-api.eu-west-2.amazonaws.com/graphql"

function getRealtimeURL(url) {
  if (!url) return ""
  const wsUrl = `wss://${url.split("://")[1]}`
  const realtime = wsUrl
    .split(".")
    .map(section =>
      section === "appsync-api" ? "appsync-realtime-api" : section
    )
    .join(".")
  return realtime
}

class ConfigStore {
  constructor({ apiUrl = "", region = "" }) {
    this.apiUrl = apiUrl
    this.region = region
    this.realtimeUrl = getRealtimeURL(apiUrl)
  }

  getConfig = () => ({
    apiUrl: this.apiUrl,
    region: this.region,
    realtimeUrl: this.realtimeUrl
  })
}

const createMainApiConfigSingleton = createInstance => {
  let instance
  return {
    getInstance: config => {
      if (!config) return instance
      return (
        instance ||
        (instance = createInstance({
          apiUrl: config.apiUrl,
          region: config.region
        }))
      )
    },
    removeInstance: () => {
      instance = undefined
    }
  }
}

export const MainApiConfigSingleton = createMainApiConfigSingleton(
  c => new ConfigStore(c)
)

const authenticationLink = setContext(async (_, { headers }) => {
  const token = await Auth.getTokenForClient()
  return {
    headers: {
      ...headers,
      Authorization: token
    }
  }
})

const wsLink = new WebSocketLink({
  uri: () =>
    MainApiConfigSingleton.getInstance()?.getConfig().realtimeUrl || "",
  options: {
    lazy: true,
    reconnect: true,
    connectionParams: async () => {
      // const token = await Auth.getTokenForClient()
      return {
        headers: {
          Authorization: ""
          // Authorization: token || ""
          //   host: url.split("://")[1]
        }
      }
    }
  }
})

// The split function takes three parameters:
//
// * A function that's called for each operation to execute
// * The Link to use for an operation if the function returns a "truthy" value
// * The Link to use for an operation if the function returns a "falsy" value
const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query)
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    )
  },
  wsLink,
  new HttpLink({
    uri: () => MainApiConfigSingleton.getInstance()?.getConfig().apiUrl || ""
  })
)

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.map(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    )
  if (networkError) {
    // Check if error response is JSON
    try {
      networkError.message = JSON.parse(networkError.bodyText)
    } catch (e) {
      // If not replace parsing error message with real one
      networkError.message = networkError.bodyText
    }
    console.log(`[Network Error]: ${networkError}`)
  }
})

const client = new ApolloClient({
  cache: new InMemoryCache({
    typePolicies: {
      // User: {
      //   keyFields: ["employeeNo"]
      // }
    }
  }),
  link: from([errorLink, authenticationLink, splitLink]),
  connectToDevTools: true
})

export default client
