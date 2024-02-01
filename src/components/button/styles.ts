import { Pressable } from "react-native";
import styled from "styled-components/native";
import Animated from "react-native-reanimated";
import { LinearGradient } from "expo-linear-gradient";

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

export const Wrapper = styled(AnimatedPressable)`
  border-radius: 8px;

  background: #eee;
`;

export const Reflection = styled(LinearGradient)`
  flex: 0 auto;
  border-radius: 8px;
  padding: 4px;
`;

export const Bracket = styled(LinearGradient)`
  padding: 2px;
  border-radius: 10px;
  justify-content: center;
`;

export const GapBetweenButtonAndBackground = styled.View`
  border-radius: 8px;
  background: rgba(128, 128, 128, 0.6);
  justify-content: center;
  align-items: center;
`;

export const AnotherWrapper = styled.View`
  flex: 1;
  background: #eee;
  border-radius: 4px;
  padding: 12px 24px;
  align-items: center;
  justify-content: center;
`;
