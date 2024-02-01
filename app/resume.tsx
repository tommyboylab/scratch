import { Animated, Text } from "react-native";
import View = Animated.View;
import { Tabs } from "expo-router";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Resume() {
  return (
    <View>
      <Tabs.Screen
        options={{
          headerShown: true,
          title: "Resume",
          tabBarIcon: () => (
            <MaterialCommunityIcons
              name="newspaper-variant-outline"
              size={24}
              color="black"
            />
          ),
        }}
      />
      <Text>Resume page</Text>
    </View>
  );
}
