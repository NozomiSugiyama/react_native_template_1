import React from "react";
import { View, NativeModules, Animated, Easing, Text, Image } from "react-native";
import { commons } from "./style";

export default class extends React.Component {

  componentWillMount() {
    this.spinValue = new Animated.Value(0)
  };

  componentDidMount () {
    this.spin();
  };

  spin () {
    this.spinValue.setValue(0)
    Animated.timing(
      this.spinValue,
      {
        toValue: 1,
        duration: 4000,
        easing: Easing.linear
      }
    ).start(() => this.spin())
  };

  render() {
    const spinRotate = this.spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg']
    });
    return (
      <View
        style={commons.view}
      >
        <Animated.View
          style={{
            transform: [{"rotate": spinRotate}],
            ...commons.animated,
          }}
        >
          <Image
            source={{uri: 'https://cdn-images-1.medium.com/max/1600/1*qUlxDdY3T-rDtJ4LhLGkEg.png'}}
            style={commons.image}
          />
        </Animated.View>
      </View>
    )
  }
}
