import React from "react"
import {Text, View, Image, Animated} from "react-native"
import { Heading, Page, AnimatedSpin, AnimatedFade, FlexBox } from "react_native_template_1/src/components"

import styles from "./styles"

export default class extends React.Component {

  componentWillMount() {
    this.setState({
      spinDuration: 1000,
      fadeDuration: 2000
    })
  }

  render() {
    return (
      <Page
        style={styles.host}
      >
        <Heading>Animated</Heading>
        <FlexBox
          justifyContent={'center'}
          alignItems={'center'}
          flexDirection={'column'}
          style={styles.view}
        >
          <Heading size={'small'}>Spin</Heading>
          <AnimatedSpin
            style={styles.animated}
            defaultSpinDuration = {this.state.spinDuration}
          >
            <Image
              source={{uri: 'https://cdn-images-1.medium.com/max/1600/1*qUlxDdY3T-rDtJ4LhLGkEg.png'}}
              style={styles.image}
            />
          </AnimatedSpin>
          <Heading size={'small'}>FadeIn</Heading>
          <AnimatedFade
            style={styles.animated}
            defaultFadeDuration = {this.state.fadeDuration}
          >
            <Image
              source={{uri: 'https://cdn-images-1.medium.com/max/1600/1*qUlxDdY3T-rDtJ4LhLGkEg.png'}}
              style={styles.image}
            />
          </AnimatedFade>
        </FlexBox>
      </Page>
    );
  }
}
