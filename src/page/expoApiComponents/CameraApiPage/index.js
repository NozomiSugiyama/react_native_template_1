import React from "react"
import { Text, View } from "react-native"
import { Actions } from "react-native-router-flux"
import { Image, Button, Alert, Heading, Page } from "react_native_template_1/src/components"
import { Camera, Permissions } from 'expo'

import styles from "./styles"

// https://docs.expo.io/versions/v27.0.0/sdk/camera

export default class extends React.Component {
  state = {
    hasCameraPermission: null,
    type: Camera.Constants.Type.back,
  };

  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  render() {
    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <Page
          style={styles.host}
          {...this.props}
        >
          <Heading>Camera</Heading>
          <View
            style={
              styles.content
            }>
            <Camera
              style={
                styles.camera
              }
              type={this.state.type}>
              <View
                style={
                  styles.stab
                }>
              </View>
            </Camera>
            <Button
              onPress={() => {
                this.setState({
                  type: this.state.type === Camera.Constants.Type.back
                    ? Camera.Constants.Type.front
                    : Camera.Constants.Type.back,
                });
              }}
            >
              change
            </Button>
          </View>
        </Page>
      );
    }
  }
}