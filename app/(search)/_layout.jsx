import { Stack } from "expo-router/stack";
import { View } from "react-native";

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "yellow",
        },
        headerTintColor: "black",
        headerTitleStyle: {
          fontWeight: "bold",
        },
        headerTitle: "Search",
      }}
    >
      {/* Optionally configure static options outside the route.*/}
      <Stack.Screen name="[user]" options={{}} />
    </Stack>
  );
}
