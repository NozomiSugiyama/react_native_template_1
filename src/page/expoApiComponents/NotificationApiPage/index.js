import React from "react"
import { Text, View } from "react-native"
import { Actions } from "react-native-router-flux"
import { Image, Button, Alert, Heading, Page } from "react_native_template_1/src/components"
import { ImagePicker, Permissions } from 'expo';

import styles from "./styles"

// https://snack.expo.io/rk7VdlH6b
// https://github.com/expo/expo-docs/blob/master/versions/v24.0.0/sdk/notifications.md
// https://docs.expo.io/versions/v27.0.0/sdk/notifications

export default class extends React.Component {
  componentWillMount() {
    this.setState({
    })
  }
  render() {
    return (
      <Page
        style={styles.host}
        {...this.props}
      >
        <Heading>Image Picker</Heading>
        <View>
          <View
            style={styles.content}
          >
            <Heading size="xsmall" align="center">Standard</Heading>
          </View>
        </View>
      </Page>
    );
  }
}
