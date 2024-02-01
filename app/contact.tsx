import { Animated, Text } from "react-native";
import View = Animated.View;
import { Tabs } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";

export default function Contact() {
  return (
    <View>
      <Tabs.Screen
        options={{
          headerShown: false,
          title: "Contact",
          tabBarIcon: () => (
            <FontAwesome name="pencil" size={24} color="black" />
          ),
        }}
      />
      <Text>Contact page</Text>
    </View>
  );
}
