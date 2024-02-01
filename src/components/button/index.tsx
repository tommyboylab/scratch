import React from "react";
import { Text, PressableProps, Easing } from "react-native";

import * as S from "./styles";
import {
  interpolate,
  interpolateColor,
  runOnJS,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withSpring,
  withTiming,
  WithTimingConfig,
} from "react-native-reanimated";
import { LinearGradient } from "expo-linear-gradient";

const config: WithTimingConfig = {
  easing: Easing.inOut(Easing.ease),
  duration: 200,
};

type Props = PressableProps & {};

export const Button = (props: Props) => {
  const hovered = useSharedValue(false);
  const pressed = useSharedValue(false);
  const btnRatio = useSharedValue(0);

  const progress = useDerivedValue(() => {
    if (hovered.value) return withTiming(0.4, config);
    if (pressed.value) return withTiming(0, { ...config, duration: 40 });
    return withTiming(1);
  });

  const onHoverIn = (v: boolean) => {
    hovered.value = true;
  };
  const onHoverOut = (v: boolean) => {
    hovered.value = false;
  };
  const onPressIn = (v: boolean) => {
    pressed.value = true;
  };
  const onPressOut = (v: boolean) => {
    pressed.value = false;
  };

  const style = useAnimatedStyle(() => {
    // runOnJS(onHoverIn)();
    const shadow = interpolateColor(
      progress.value,
      [0, 1],
      ["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 1)"],
    );

    return {
      boxShadow: `0 2px 4px ${shadow}`,

      transform: [
        {
          scaleY: pressed.value
            ? withTiming(1 - 0.03 * btnRatio.value, { ...config, duration: 40 })
            : hovered.value
              ? withTiming(1 - 0.02 * btnRatio.value, config)
              : withTiming(1, config),
        },
        {
          scaleX: pressed.value
            ? withTiming(0.97, { ...config, duration: 40 })
            : hovered.value
              ? withTiming(0.98, config)
              : withTiming(1, config),
        },
      ],
    };
  });

  return (
    <S.Bracket colors={["rgba(128,128,128,0.4)", "transparent"]}>
      <S.GapBetweenButtonAndBackground
        onLayout={(e) => {
          btnRatio.value =
            e.nativeEvent.layout.width / e.nativeEvent.layout.height;
        }}
      >
        <S.Wrapper
          {...{ onHoverIn, onHoverOut, onPressIn, onPressOut }}
          style={[style]}
          {...props}
        >
          <S.Reflection colors={["#FFFFFF88", "#00000010"]}>
            <S.AnotherWrapper>
              <Text>Button</Text>
            </S.AnotherWrapper>
          </S.Reflection>
        </S.Wrapper>
      </S.GapBetweenButtonAndBackground>
    </S.Bracket>
  );
};
