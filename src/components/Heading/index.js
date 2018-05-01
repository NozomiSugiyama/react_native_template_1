import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { commons, sizes } from "./style";

export default ({
  children,
  size = "medium", // xsmall small medium large xlarge
  align, //auto left right center justify
  style = {},
  textStyle = {},
  ...props
}) => 
  <View
    style={{
      ...commons.host,
      ...sizes[size].host,
      ...style
    }}
  >
    <Text
      style={{
        ...sizes[size].text,
        ...(
          align ? {textAlign: align}
                : {}
        ),
        ...textStyle
      }}
      {...props}
    >
      {children}
    </Text>
  </View>
