import React from "react";
import { Image } from "react-native";

export default ({
  source,
  uri,
  ...props
}) =>  
  <Image
    source={source || {uri}}
    {...props}
  />
