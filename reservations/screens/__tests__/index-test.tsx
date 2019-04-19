import "react-native"
import React from "react"
import Reservations, { query } from "../index"
import renderer from "react-test-renderer"
import { MockedProvider } from "react-apollo/test-utils"

const data = [{
  request: {query},
  result: {
    data: {
      reservations: [
        { id: "1",
          name: "Tester",
          hotelName: "Hilton",
          arrivalDate: "2019-04-01",
          departureDate: "2019-04-05" }
      ],
    },
  },
}]

it("renders correctly", () => {
  expect(
    renderer.create(
      <MockedProvider mocks={data} addTypename={false}>
        <Reservations />
      </MockedProvider>
    )
  ).toMatchSnapshot()
})