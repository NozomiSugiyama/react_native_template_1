import React from "react";
import { View } from "react-native"
import FlexBox from "./../FlexBox"
import { commons } from "./style"

export default ({
  alignItems = "flex-start",
  children,
  style = {},
  ...props
}) =>
  <FlexBox
    style={{
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
              },
            }
          )
      )
      : children
      )
    }
  </FlexBox>
