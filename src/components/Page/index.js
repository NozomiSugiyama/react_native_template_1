import React from "react";
import { ScrollView } from "react-native";
import { commons } from "./style"

export default ({
  children,
  style = {},
  ...props
}) =>
  <ScrollView
    style={{
      ...commons.host,
      ...style
    }}
    {...props}
  >
    {children}
  </ScrollView>
