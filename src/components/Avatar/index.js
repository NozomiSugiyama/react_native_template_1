import React from "react";
import { Avatar } from "react-native-elements";
import { commons, sizes } from "./style";

export default ({
  activeOpacity = 0.7,
  children,
  onPress, // = () => undefined,
  size = "medium", // small medium large xlarge
  title="",
  rounded = true,
  source,
  uri,
  style = {},
  ...props
}) => 
  <Avatar
    style={{
      ...style
    }}
    small={size === "small"}
    title={title}
    titleStyle={{color: "white"}}
    medium={size === "medium"}
    large={size === "large"}
    xlarge={size === "xlarge"}
    rounded={rounded}
    source={source || uri && {uri}}
    onPress={onPress}
    activeOpacity={activeOpacity}
    {...props}
  />
