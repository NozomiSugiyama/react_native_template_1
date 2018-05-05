import React from "react"
import { Text, View } from "react-native"
import { Actions } from "react-native-router-flux"
import { Button, Heading, Page, FlexBox } from "react_native_template_1/src/components"

import styles from "./styles"

export default class extends React.Component {
  render() {
    return (
      <Page
        style={styles.host}
        {...this.props}
      >
        <Heading>Heading</Heading>
        <View>
          <View
            style={styles.content}
          >
            <Heading size="xsmall" align="center">Standard</Heading>
            <Heading size="xlarge">Heading xlarge</Heading>
            <Heading size="large">Heading large</Heading>
            <Heading size="medium">Heading medium</Heading>
            <Heading size="small">Heading small</Heading>
            <Heading size="xsmall">Heading xsmall</Heading>
          </View>
        </View>
        <View>
          <View
            style={styles.content}
          >
            <Heading size="xsmall" align="center">Position align</Heading>
            <Heading align="left">align left</Heading>
            <Heading align="center">align center</Heading>
            <Heading align="right">align right</Heading>
          </View>
        </View>
      </Page>
    );
  }
}
