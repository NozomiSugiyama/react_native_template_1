import React from "react"
import { Text, View } from "react-native"
import { Actions } from "react-native-router-flux"
import { Image, Button, Alert, Heading, Page } from "react_native_template_1/src/components"
import { ImagePicker } from 'expo'

import styles from "./styles"

// https://docs.expo.io/versions/v27.0.0/sdk/camera

export default class extends React.Component {

  componentWillMount() {
    this.setState({
      image: null
    })
  }

  _takePhoto = async () => {
    let result = await ImagePicker.launchCameraAsync({
      allowsEditing: false
    });

    console.log(result);

    if (!result.cancelled) {
      this.setState({image: result.uri});
    }
  };

  _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [16, 9]
    });

    console.log(result);

    if (!result.cancelled) {
      this.setState({image: result.uri});
    }
  };

  render() {
    let { image } = this.state;

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
          <Button
            onPress={this._takePhoto}
          >
            Camera
          </Button>
          <Button
            onPress={this._pickImage}
          >
            Camera role
          </Button>
          {
            image &&
            <Image
              source={{uri: image}}
              style={{width: 300, height: 300}}
            />
          }
        </View>
      </Page>
    );
  }
}