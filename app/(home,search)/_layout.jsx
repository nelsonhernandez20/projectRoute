import { Stack } from "expo-router";
import { Text } from "react-native";

export default function DynamicLayout({ segment }) {
  console.log(segment);
  if (segment === "(search)") {
    return <Text>search</Text>;
  }

  return <Stack />;
}
