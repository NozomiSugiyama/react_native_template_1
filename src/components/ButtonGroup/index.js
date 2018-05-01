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
                ...commons.item,
                ...(x.props.style ? x.props.style : {}),
                ...(i !== 0 ? { borderLeftWidth: 1 } : {}), // not first
                ...(i === 0 ? { borderTopLeftRadius: 4, borderBottomLeftRadius: 4 } : {}), // first
                ...((i + 1) === children.length ? { borderTopRightRadius: 4, borderBottomRightRadius: 4 } : {}), // last
              },
            }
          )
      )
      : children
      )
    }
  </FlexBox>
