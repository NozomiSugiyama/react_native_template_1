import React from "react"
import {Text, View, Image, Animated} from "react-native"
import { Heading, Page, AnimatedSpin, AnimatedFade, FlexBox } from "react_native_template_1/src/components"

import styles from "./styles"

export default class extends React.Component {

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
          />
          <Heading size={'small'}>Fade</Heading>
          <AnimatedFade/>
        </FlexBox>
      </Page>

    );
  }
}
