import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import { commons, types } from "./style";

export default ({
  type = "info", // primary secondary success danger warning info light dark
  disabledText,
  enabledText,
  children,
  enabled = false,
  pill = true,
  textStyle = {},
  style = {},
  ...props
}) =>
  <TouchableOpacity
    activeOpacity={1}
    style={{
      ...commons.host,
      ...(
        pill ? {
          borderRadius: 160,
          paddingRight: 9.6,
          paddingLeft: 9.6
        }
             : {}
      ),
      backgroundColor: enabled ? "blue" : "red",
      ...style
    }}
    {...props}
  >
    <View
      style={{
        ...commons.disabledView
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
    <View
      style={{
        ...commons.selector
      }}
    >

    </View>
    <View
      style={{
        ...commons.host
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
  </TouchableOpacity>
