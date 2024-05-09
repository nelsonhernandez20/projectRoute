import { DrawerNavigationProp } from "@react-navigation/drawer";
import { Stack, useNavigation, useRouter, useSegments } from "expo-router";
import { Button, Pressable, Text } from "react-native";

export default function StackRoot() {
  const router = useRouter();
  const segment = useSegments();
  const nav = useNavigation();
  return (
    <Stack
      screenOptions={{
        headerBackButtonMenuEnabled: true,
        headerLeft: ({ label }) => {
          if (!router.canGoBack() || segment.some((s) => s === "root"))
            return (
              <Button onPress={() => nav.openDrawer()} title={"icon menu"} />
            );
          return (
            <Pressable
              style={{ marginHorizontal: 2 }}
              onPress={() => router.back()}
            >
              <Text>{label ?? "back"}</Text>
            </Pressable>
          );
        },
      }}
    />
  );
}
