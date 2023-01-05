import { StatusBar } from "expo-status-bar";
import React from "react";
import { Pressable, Text, View } from "react-native";
import { CounterState } from "./counterState";

type CounterProps = {
  state: CounterState;
  upCount: () => void;
  navigation: any;
};

export const Counter = (props: CounterProps) => {
  const { state, upCount } = props;
  return (
    <View>
      <Text>count: {state.count}</Text>
      <Pressable onPress={upCount}>
        <Text>Up Count</Text>
      </Pressable>
      <StatusBar style="auto" />
    </View>
  );
};
