import React from "react"
import { AppRegistry, ScrollView, View, Text } from "react-native"

type Errors = {
  graphQLErrors : [{message : string}]
}
type Props = {
  component : () => JSX.Element,
  error    ?: Errors,
  loading   : boolean,
}
export default function Screen({loading, error, component} : Props){
  return (
    <View>
      {loading ?
        <View><Text>Loading...</Text></View>
      : null}

      {error ?
        <ScrollView>
          {error.graphQLErrors.map(({message}, index) =>
            <Text key={index}>{message}</Text>
          )}
        </ScrollView>
      : null}

      {!loading && !error ? component() : null}
    </View>
  )
}
AppRegistry.registerComponent("Screen", () => Screen)