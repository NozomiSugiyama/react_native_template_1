import React from "react";
import { View } from "react-native";
import { FlexBox } from "react_native_template_1/src/components"
import { commons } from "./style"

export default ({
  children,
  style = {},
  selectedIndex,
  ...props
}) => 
  <View
    style={{
      ...commons.host,
      ...style
    }}
    {...props}
  >
    {
      (Array.isArray(children) 
      ? children.map((x, i) =>
          React.cloneElement(
            x,
            {
              ...x.props,
              key: i,
              style: {
                ...(x.props.style ? x.props.style : {}),
                ...((i !== 0) ? commons.insideItem : {})
              },
              selected: selectedIndex == i
            }
          )
      )
      : children
      )
    }
  </View>
