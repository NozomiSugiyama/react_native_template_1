import React from "react";
import { NativeModules, LayoutAnimation, Animated, TouchableOpacity, Text, View } from "react-native";
import { commons, types } from "./style";

const { UIManager } = NativeModules;

UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

export default ({
  actived= false,
  type = "info", // primary secondary success danger warning info light dark
  disabledText,
  enabledText,
  children,
  enabled = false,
  onPress = () => undefined,
  pill = true,
  textStyle = {},
  style = {},
  ...props
}) =>
  <TouchableOpacity
    activeOpacity={1}
    style={{
      ...commons.host,
      ...types.host[type],
      ...(
        pill ? {
          borderRadius: 160,
          paddingRight: 9.6,
          paddingLeft: 9.6
        }
             : {}
      ),
      ...style
    }}
    onPress={() => {

      LayoutAnimation.configureNext({
        duration: 30,
        update: {
          type: LayoutAnimation.Types.easeInEaseOut,
        }
      });
      onPress()
    }}
    {...props}
  >
    <View
      style={{
        ...commons.innerItem,
        ...(enabled ? commons.selectorEnabled: commons.selectorDisabled)
      }}
    >
      <View
        style={{
          ...commons.pallet,
          ...types.enabledPallet[type]
        }}
      >
        <Text
          style={{
            ...commons.text,
            ...types.text[type],
            ...textStyle
          }}
        >
          {enabledText}
        </Text>
      </View>
      <View
        style={{
          ...commons.selectorWrapper
        }}
      >
        <View
          style={{
            ...commons.selector,
          }}
        />
      </View>
      <View
        style={{
          ...commons.pallet,
          ...types.disabledPallet[type],
        }}
      >
        <Text
          style={{
            ...commons.text,
            ...types.text[type],
            ...textStyle
          }}
        >
          {disabledText}
        </Text>
      </View>
    </View>
  </TouchableOpacity>
