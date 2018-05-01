import React from "react";
import { View } from "react-native";
import { FlexBox } from "react_native_template_1/src/components"
import { commons } from "./style"

export default ({
  children,
  style = {},
  selectedIndex,
  orientation = "vertical", // vertical horizontal
  Component = orientation == "horizontal" ? FlexBox : View,
  ...props
}) => 
  <Component
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
                ...(
                  (i !== 0) ?
                    orientation == "vertical" ? commons.verticalItem
                  :                             commons.horizontalItem
                :             {}
                )
              },
              selected: selectedIndex == i
            }
          )
      )
      : children
      )
    }
  </Component>
