import React from "react"
import { View } from "react-native"
import Screen from "../Screen"
import { create } from "react-test-renderer"

it("loads", () => {
  expect(
    create(<Screen loading={true} component={() => <View></View>}/>)
  ).toMatchSnapshot()
})

it("handles error", () => {
  const error = { graphQLErrors: [{message: "not working"}] }
  // @ts-ignore
  create(<Screen loading={false} error={error} component={() => <View></View>}/>)
    .root
    .findByProps({error})
})

it("renders", () => {
  // @ts-ignore (`id` used strictly for testing)
  create(<Screen loading={false} component={() => <View id="test"></View>}/>)
    .root
    .findByProps({id: "test"})
})