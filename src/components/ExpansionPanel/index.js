import React from "react";
import { Text, View } from "react-native";
import { commons, types } from "./style";
import Heading from "../Heading"

export default ({
                  type = "info", // primary secondary success danger warning info light dark
                  style = {},
                  textStyle = {},
                  title = "",
                  children,
                  ...props
                }) =>
  <View
    style={{
      ...commons.view,
      ...types.view[type],
      ...style
    }}
  >
    {title ? <Heading size="small" textStyle={types.text[type]}>{title}</Heading> : null}
    <Text
      style={{
        ...commons.text,
        ...types.text[type],
        ...textStyle
      }}
      {...props}
    >
      {children}
    </Text>
  </View>
