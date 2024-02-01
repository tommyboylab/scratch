import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Tabs } from "expo-router";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Index() {
  return (
    <>
      <Tabs.Screen
        options={{
          headerShown: false,
          title: "Index",
          tabBarIcon: () => (
            <MaterialCommunityIcons
              name="newspaper-variant-outline"
              size={24}
              color="black"
            />
          ),
        }}
      />
      <StatusBar style="auto" />
      <Text>Welcome</Text>
    </>
  );
}
