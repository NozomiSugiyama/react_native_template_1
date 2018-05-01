import React from "react";
import { View } from "react-native";
import { commons } from "./style"

export default ({
  alignItems = "flex-start",
  component = View,
  Component = component,
  children,
  flexGrow = 1,
  flexWrap = false,
  flexDirection = "row",
  justifyContent = "flex-start",
  style = {},
  ...props
}) =>
  <Component
    style={{
      ...{
        flex: flexGrow,
        flexWrap: flexWrap ? "wrap" : "nowrap",
        alignItems,
        flexDirection,
        justifyContent
      },
      ...style
    }}
    {...props}
  >
    {children}
  </Component>
