import { Stack } from "expo-router/stack";
import { View } from "react-native";

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "red",
        },
        headerTintColor: "white",
        headerTitleStyle: {
          fontWeight: "bold",
        },
        headerTitle: "Profile",
      }}
    >
      {/* Optionally configure static options outside the route.*/}
      <Stack.Screen name="[user]" options={{}} />
    </Stack>
  );
}
