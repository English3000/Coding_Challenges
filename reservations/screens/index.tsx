import React from "react"
import { AppRegistry, View, FlatList, Text, ListRenderItemInfo } from "react-native"
import { Query } from "react-apollo"
import Screen from "../components/Screen"
import gql from "graphql-tag"

export const query = gql`{
	reservations(orderBy: updatedAt_DESC) {
    id
    name
    hotelName
    arrivalDate
    departureDate
  }
}`
type Reservation = {
  id            : string
  name          : string
  hotelName     : string
  arrivalDate   : string
  departureDate : string
}
const Reservations = ({data} : {data : {reservations: Reservation[]}}) => {
  return <FlatList keyExtractor={({id}) => id} data={data.reservations} renderItem={
    ({item} : ListRenderItemInfo<Reservation>) => {
      const {name, hotelName, arrivalDate, departureDate} = item
      return (
        <View style={{marginVertical: 10}}>
          <Text>Name: {name}</Text>
          <Text>Hotel: {hotelName}</Text>
          <Text>Arrival: {arrivalDate}</Text>
          <Text>Departure: {departureDate}</Text>
        </View>
      )
    }
  } />
}

export default function index() {
  return <Query query={query}>{
    // @ts-ignore ("react-apollo" doesn't export type ApolloError)
    ({ loading, error, data }) => <Screen loading={loading} error={error}
                                          component={() => <Reservations data={data} />} />
  }</Query>
}
AppRegistry.registerComponent("Reservations", () => index)