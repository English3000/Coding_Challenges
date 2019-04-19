// @ts-check
import React from "react"
import { AppRegistry } from "react-native"
import { createBottomTabNavigator, createAppContainer } from "react-navigation"
import { ApolloProvider } from "react-apollo"
import { ApolloClient } from "apollo-client"
import { InMemoryCache } from "apollo-cache-inmemory"
import { HttpLink } from "apollo-link-http"
import Reservations from "./screens/index"
import Reserve from "./screens/create"
import { name as appName } from "./app.json"

const client = new ApolloClient({
                 cache: new InMemoryCache(),
                 link:  new HttpLink({uri: "https://us1.prisma.sh/public-luckox-377/reservation-graphql-backend/dev"})
               }),

      Nav    = createBottomTabNavigator({Reservations, Reserve},
                                        {initialRouteName: "Reservations"}),

      App    = createAppContainer(Nav)

AppRegistry.registerComponent(appName, () => () =>
  <ApolloProvider client={client}>
    <App/>
  </ApolloProvider>
)