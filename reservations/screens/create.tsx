import React, { useState } from "react"
import { ScrollView, TextInput, Button } from "react-native"
import { NavigationContainerProps } from "react-navigation"
import { Mutation } from "react-apollo"
import Screen from "../components/Screen"
import gql from "graphql-tag"

const mutation = gql`mutation($data: ReservationCreateInput!) {
  createReservation(data: $data) {
    id
    name
    hotelName
    arrivalDate
    departureDate
  }
}`
type State = {
  name          ?: string
  hotelName     ?: string
  arrivalDate   ?: string
  departureDate ?: string
}
function Reserve(props : {write: (input : {variables : State}) => any, data : any}) {
  const INITIAL_STATE     = {name: undefined, hotelName: undefined, arrivalDate: undefined, departureDate: undefined},
        [state, setState] = useState(INITIAL_STATE)

  function update(key : string) {
    return (value : string) => setState(prevState => Object.assign({}, prevState, {[key]: value}))
  }

  return (
    <ScrollView>
      <TextInput placeholder="name"              value={state.name}          onChangeText={update("name")}         />
      <TextInput placeholder="hotel name"        value={state.hotelName}     onChangeText={update("hotelName")}    />
      <TextInput placeholder="date of arrival"   value={state.arrivalDate}   onChangeText={update("arrivalDate")}  />
      <TextInput placeholder="date of departure" value={state.departureDate} onChangeText={update("departureDate")}/>
      <Button title="Reserve" onPress={() => {props.write({variables: state})}}/>
    </ScrollView>
  )
}

export default (props : NavigationContainerProps) =>
  <Mutation mutation={mutation}
            onCompleted={
              // @ts-ignore (linter error b/c `navigation` is an optional prop... I'd rather have the runtime error than the silent error of a no-op `onPress`)
              () => props.navigation.navigate("Reservations")}>{
    (createReservation, { data, loading, error }) =>
      // @ts-ignore ("react-apollo" doesn't export type ApolloError)
      <Screen loading={loading} error={error}
              component={() => <Reserve write={createReservation} data={data} />} />
  }</Mutation>