import React from "react";
import { View, NativeModules, Animated, Easing, Text, Image } from "react-native";
import { commons } from "./style";

export default class extends React.Component {

  componentWillMount() {
    this.moveValue = new Animated.Value(0);
    this.setState({
      defaultMoveDuration: undefined
    })
  };

  componentDidMount () {
    (async () => {
      this.setState({
        defaultMoveDuration: this.props.defaultMoveDuration
      })
    })();
    this.move()
  };

  move () {
    this.moveValue.setValue(0)
    Animated.timing(
      this.moveValue,
      {
        toValue: 1,
        duration: this.state.defaultMoveDuration,
        easing: Easing.linear
      }
    ).start(() => this.move())
  };

  render() {
    const {
      moving = this.moveValue.interpolate({
        inputRange: [0, 0.5, 1],
        outputRange: [-100 , 100, -100]
      }),
      moveDuration,
      children
    } = this.props;

    return (
      <View
        style={commons.view}
      >
        <Animated.View
          style={{
            left: moving,
            ...commons.animated,
          }}
          moveDuration = {!moveDuration && this.state.defaultMoveDuration ? this.state.defaultMoveDuration : moveDuration}
        >
          {children}
        </Animated.View>
      </View>
    )
  }
}
