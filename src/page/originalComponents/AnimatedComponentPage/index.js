import React from "react"
import { Text, View } from "react-native"
import { Heading, Page, Animated, FlexBox } from "react_native_template_1/src/components"

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
          <Heading
            size={'small'}
          >
            Animated</Heading>
          <Animated />
        </FlexBox>
      </Page>

    );
  }
}
