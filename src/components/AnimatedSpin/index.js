import React from "react";
import { View, NativeModules, Animated, Easing, Text, Image } from "react-native";
import { commons } from "./style";

export default class extends React.Component {

  componentWillMount() {
    this.spinValue = new Animated.Value(0);
    this.setState({
      defaultDuration: undefined
    })
  };

  componentDidMount () {
    (async () => {
      this.setState({
        defaultDuration: this.props.defaultDuration
      })
    })();
    this.spin()
  };

  spin () {
    this.spinValue.setValue(0)
    Animated.timing(
      this.spinValue,
      {
        toValue: 1,
        duration: this.state.defaultDuration,
        easing: Easing.linear
      }
    ).start(() => this.spin())
  };

  render() {
    const {
      spinRotate = this.spinValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg']
      }),
      spinDuration,
      children
    } = this.props;

    return (
      <View
        style={commons.view}
      >
        <Animated.View
          style={{
            transform: [{"rotate": spinRotate}],
            ...commons.animated,
          }}
          spinDuration = {!spinDuration && this.state.defaultDuration ? this.state.defaultDuration : spinDuration}
        >
          {children}
        </Animated.View>
      </View>
    )
  }
}
