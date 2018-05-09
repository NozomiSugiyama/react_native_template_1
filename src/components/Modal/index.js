import React from "react";
import { Text, View, Platform, Dimensions, NativeModules, LayoutAnimation } from "react-native";
import { commons, types } from "./style";
import FlexBox from "../FlexBox"
import Heading from "../Heading"

const { UIManager } = NativeModules;

UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);
  
export default ({
  children,
  root,
  type = "none", // none primary secondary success danger warning info light dark
  style = {},
  visible,
  ...props
}) => {
  LayoutAnimation.configureNext({
    duration: 300,
    update: {
      type: LayoutAnimation.Types.easeInEaseOut,
    }
  });

  const { width, height } = Dimensions.get('window');
  return (
    <FlexBox
      alignItems="center"
      justifyContent="center"
      style={[
        commons.host,
        {
          width,
          height
        },
        visible ? {opacity: 1} : {maxHeight: 0, opacity: 0}
      ]}
    >
      <FlexBox
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        style={[
          commons.view,
          types.view[type],
          style
        ]}
        {...props}
      >
        {children}
      </FlexBox>
    </FlexBox>
  )
}