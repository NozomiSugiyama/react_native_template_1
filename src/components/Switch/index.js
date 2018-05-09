import React from "react";
import { NativeModules, LayoutAnimation, Animated, TouchableOpacity, Text, View } from "react-native";
import { commons, types } from "./style";

const { UIManager } = NativeModules;

UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

export default ({
  isActive = true,
  type = "primary", // primary secondary success danger warning info light dark
  disabledText,
  enabledText,
  children,
  enabled = false,
  onPress = () => undefined,
  pill = true,
  textStyle = {},
  style = {},
  Component = isActive ? TouchableOpacity : View ,
  ...props
}) =>
  <Component
    activeOpacity={1}
    style={{
      ...commons.host,
      ...(
        pill ? {
          borderRadius: 160,
        }
             : {}
      ),
      ...(enabled ? commons.enabledHost: commons.disabledHost),
      ...(!isActive ? { opacity: 0.8 } : {}),
      ...style
    }}
    onPress={() => {

      LayoutAnimation.configureNext({
        duration: 300,
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
          ...commons.pallet
        }}
      >
        <Text
          style={{
            ...commons.text,
            ...commons.enabledText,
            ...types.enabledText[type],
            ...textStyle,
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
            ...(
              !pill ? {
                borderRadius: 7,
                paddingRight: 9.6,
                paddingLeft: 9.6
              }
                   : {}
            ),
            ...types.selector[type]
          }}
        />
      </View>
      <View
        style={{
          ...commons.pallet,
        }}
      >
        <Text
          style={{
            ...commons.text,
            ...commons.disabledText,
            ...textStyle
          }}
        >
          {disabledText}
        </Text>
      </View>
    </View>
  </Component>
