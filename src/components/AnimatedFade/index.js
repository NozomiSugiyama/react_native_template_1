import React from "react";
import { View, NativeModules, Animated, Easing, Text, Image } from "react-native";
import { commons } from "./style";

export default class extends React.Component {

  componentWillMount() {
    this.fadeValue = new Animated.Value(0);
    this.setState({
      defaultFadeDuration: undefined,
      defaultFadeType: null
    })
  };

  componentDidMount () {
    (async () => {
      this.setState({
        defaultFadeDuration: this.props.defaultFadeDuration,
      })
    })();
    this.fade();
  };

  fade () {
    this.fadeValue.setValue(0)
    Animated.timing(
      this.fadeValue,
      {
        toValue: 1,
        duration: this.state.defaultFadeDuration,
        easing: Easing.linear
      }
    ).start(() => this.fade())
  };

  render() {
    const {
      fading = this.fadeValue.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1]
      }),
      fadeDuration,
      children
    } = this.props;

    return (
      <Animated.View
        style={{
          opacity: fading,
          ...commons.animated,
        }}
        fadeDuration = {!fadeDuration && this.state.defaultFadeDuration ? this.state.defaultFadeDuration : fadeDuration}
      >
        {children}
      </Animated.View>
    )
  }
}
