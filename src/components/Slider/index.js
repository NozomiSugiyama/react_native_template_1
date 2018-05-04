import React from "react"
import { Text, View } from "react-native"
import { commons } from "./style"
import { Slider } from 'react-native-elements'


export default ({
    animateTransitions = false,
    animationConfig = "",
    animationType,
    debugTouchArea = false,
    disabled = false,
    maximumTrackTintColor,
    maximumValue = 1,
    minimumTrackTintColor,
    minimumValue = 0,
    onSlidingComplete,
    onSlidingStart,
    onValueChange,
    orientation = "horizontal",
    step = 0,
    thumbStyle = {},
    thumbTintColor,
    thumbTouchSize,
    trackStyle = {},
    value = 0,
    style = {},
    ...props
  }) => 
    <Slider
        style={{
            ...style
        }}
        orientation={orientation}
        value={value}
        maximumValue={maximumValue}
        minimumValue={minimumValue}
        onValueChange={onValueChange} 
        {...props}
    />