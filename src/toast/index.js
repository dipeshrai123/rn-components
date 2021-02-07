import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import {
  AnimatedBlock,
  useAnimatedValue,
  useDrag,
  clamp,
} from "react-native-ui-animate";

const { width: wWidth } = Dimensions.get("window");

export const Toast = ({ open, close }) => {
  const my = React.useRef(0);
  const translateY = useAnimatedValue(open ? 0 : -200);

  const bind = useDrag(({ down, movementY }) => {
    if (down) {
      my.current = clamp(movementY, -100, 0);
    } else {
      if (my.current < -50) {
        close();
      } else {
        my.current = 0;
      }
    }

    translateY.value = my.current;
  });

  return (
    <AnimatedBlock
      {...bind()}
      style={[
        styles.toastContainer,
        {
          transform: [{ translateY: translateY.value }],
        },
      ]}
    >
      <Text
        style={{
          textAlign: "center",
          fontSize: 20,
        }}
      >
        Swipe up to close toast
      </Text>
    </AnimatedBlock>
  );
};

const styles = StyleSheet.create({
  toastContainer: {
    position: "absolute",
    width: wWidth - 50,
    left: 50 / 2,
    right: 0,
    top: 50,
    height: 100,
    backgroundColor: "#ffffff",
    borderRadius: 10,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#e1e1e1",
    shadowOpacity: 0.2,
    shadowColor: "#000",
    shadowRadius: 20,
    shadowOffset: { width: 0, height: 4 },
    padding: 20,
  },
});
