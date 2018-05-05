import React from "react";
import { Image } from "react-native";

import { commons } from "./style"

export default ({
  source,
  style,
  uri,
  ...props
}) =>  
  <Image
    style={[
      commons.host,
      style
    ]}
    source={source || {uri}}
    {...props}
  />
