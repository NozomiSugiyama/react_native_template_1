import React from "react";
import {Text, View} from "react-native";
import { commons, closed, opened } from "./style";
import Heading from "../Heading"

export default ({
                  type = "info", // primary secondary success danger warning info light dark
                  style = {},
                  textStyle = {},
                  title = "",
                  children,
                  enabled = false,
                  ...props
                }) =>
  <View
    style={{
      ...commons.view,
      ...closed.view,
      ...(!enabled ? closed.view: opened.view),
      ...style
    }}
    enabled
  >
    {title ? <Heading size="small" textStyle={types.text[type]}>{title}</Heading> : null}
    <Text
      style={{
        ...commons.text,
        ...closed.text,
        ...(!enabled ? closed.text: opened.text),
        ...textStyle
      }}
      {...props}
    >
      {children}
    </Text>
  </View>
