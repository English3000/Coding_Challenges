This project is not complete. I simply do not have the time.

Here's what I've done:
* an HOC for loading, errors, and rendering data
* a screen that lists reservations (both debugged, w/ tests: `master` branch)
* code for a screen to make a reservation (not debugged, no test: `state-mgmt` branch)

### Next Steps
1. Clearly, debugging then adding tests would be next steps.
2. Additionally, adding a subscription to `index.tsx` to add the mutation result to the top of the list.
3. Changing from `createBottomTabNavigator` to `createStackNavigator` with floating button at bottom of `index.tsx` which navigates to `create.tsx` for better UX
4. Styling

### One Note
I approached this task from the standpoint of creating an MVP. Therefore, given the specifications, most of this was straightforward.

The one design decision I debated was state management for `create.tsx`
At first I used [Undux]("https://undux.org/"). Then I realized I only wanted this state while I was on the screen. If I left, I wouldn't want the data to still be there. So I switched to `useState`