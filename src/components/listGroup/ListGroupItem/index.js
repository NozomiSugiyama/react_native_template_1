import React from "react";
import { TouchableHighlight, View, Text } from "react-native";
import { commons, types } from "./style"
import Badge from "./../../Badge"
import FlexBox from "./../../FlexBox"

export default ({
  selected = false,
  active = selected,
  disabled = false,
  badgeText = "",
  children,
  style = {},
  type = "none", // none primary secondary success danger warning info light dark
  onPress, // () => undefined
  Component = onPress ? TouchableHighlight : View,
  ...props
}) => 
  <Component
    style={[
      commons.view,
      (active ? commons.activeView: {}),
      (disabled ? commons.disabledView: {}),
      types.view[type],
      style,
    ]}
    onPress={onPress}
    {...props}
    underlayColor={!disabled && types.underlayColor[type]}
  >
    <FlexBox
      alignItems="center"
      justifyContent="space-between"
    >
      <Text
        style={[
          commons.text,
          (active ? commons.activeText: {}),
          (disabled ? commons.disabledText: {}),
          types.text[type],
          (badgeText ? { maxWidth: "90%" } : {})
        ]}
      >
        {children}
      </Text>
      {badgeText 
     ? <Badge type={type == "none" ? "primary" : type}>{badgeText}</Badge>
     : null
      }
    </FlexBox>
  </Component>
