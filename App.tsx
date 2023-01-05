import React from "react";
import { Pressable, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AppState, AppStateUpdaters, initialAppState } from "./AppState";
import { Counter } from "./components/counter/counter";
import { counterStateUpdaters } from "./components/counter/counterState";
import { navigateToCounter } from "./components/navigator";

export const Stack = createNativeStackNavigator();

type AppProps = {};

export default class App extends React.Component<AppProps, AppState> {
  constructor(p: AppProps) {
    super(p);
    this.state = initialAppState();
  }

  render(): React.ReactNode {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          {/* home */}
          <Stack.Screen name="Home">
            {(props) => (
              <>
                <Text>Hi this is the Home Page</Text>
                <Pressable onPress={navigateToCounter(props.navigation)}>
                  <Text>Press here to go to the counter.</Text>
                </Pressable>
              </>
            )}
          </Stack.Screen>
          {/* counter */}
          <Stack.Screen name="Counter">
            {(props) => (
              <Counter
                {...props}
                state={this.state.counter}
                upCount={() =>
                  this.setState(
                    AppStateUpdaters.updateCounterState(
                      counterStateUpdaters.upCount
                    )
                  )
                }
              />
            )}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
