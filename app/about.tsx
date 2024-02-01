import { Animated, Text } from "react-native";
import View = Animated.View;
import { Tabs } from "expo-router";
import { Fontisto } from "@expo/vector-icons";

export default function About() {
  return (
    <View>
      <Tabs.Screen
        options={{
          headerShown: true,
          title: "About",
          tabBarIcon: () => <Fontisto name="person" size={24} color="black" />,
        }}
      />
      <Text>About page</Text>
    </View>
  );
}
