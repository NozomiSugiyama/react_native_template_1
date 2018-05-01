import React from "react";
import { View, Text, TouchableHighlight } from "react-native";
import { commons, types } from "./style";

export default ({
  children,
  style = {},
  textStyle = {},
  type = "info", // primary secondary success danger warning info light dark
  pill = false,
  onPress,
  Component = onPress ? TouchableHighlight : View,
  props
}) =>
  <Component
    style={{
      ...commons.view,
      ...types.view[type],
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
    onPress={onPress}
    underlayColor={types.underlayColor[type]}
    {...props}
  >
    <Text
      style={{
        ...commons.text,
        ...types.text[type],
        ...textStyle
      }}
    >
      {children}
    </Text>
  </Component>
