import React from "react";
import { View, NativeModules, Animated, Easing, Text, Image } from "react-native";
import { commons } from "./style";
import styles from "../../page/originalComponents/AnimatedComponentPage/styles";

export default class extends React.Component {

  componentWillMount() {
    this.fadeValue = new Animated.Value(0)
  };

  componentDidMount () {
    this.fadeIn();
  };

  fadeIn () {
    this.fadeValue.setValue(0)
    Animated.timing(
      this.fadeValue,
      {
        toValue: 1,
        duration: 2000,
        easing: Easing.linear
      }
    ).start(() => this.fadeIn())
  };

  render() {
    const fading= this.fadeValue;

    return (
      <Animated.View
        style={{
          opacity: fading,
          ...commons.animated,
        }}
      >
        <Image
          source={{uri: 'https://cdn-images-1.medium.com/max/1600/1*qUlxDdY3T-rDtJ4LhLGkEg.png'}}
          style={styles.image}
        />
      </Animated.View>
    )
  }
}
