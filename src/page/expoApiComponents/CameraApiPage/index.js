import React from "react"
import { Text, View, Dimensions } from "react-native"
import { Actions } from "react-native-router-flux"
import { Image, Button, Alert, Heading, Page, FlexBox } from "react_native_template_1/src/components"
import { ImagePicker } from 'expo'

import styles from "./styles"

// https://docs.expo.io/versions/v27.0.0/sdk/camera

export default class extends React.Component {

  componentWillMount() {
    this.setState({
      image: null,
      deviceWidth: Dimensions.get('window').width
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
    const { deviceWidth } = this.state;

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
            Select
          </Button>
          <FlexBox
            justifyContent={'center'}
          >
            {
              image &&
              <Image
                source={{uri: image}}
                style={{
                  width: deviceWidth,
                  height: deviceWidth,
                  ...styles.image,
                }}
              />
            }
          </FlexBox>
        </View>
      </Page>
    );
  }
}