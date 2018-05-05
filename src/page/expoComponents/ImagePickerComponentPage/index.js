import React from "react"
import { Text, View } from "react-native"
import { Actions } from "react-native-router-flux"
import { Image, Button, Alert, Heading, Page } from "react_native_template_1/src/components"
import { ImagePicker, Permissions } from 'expo';

import styles from "./styles"

export default class extends React.Component {
  componentWillMount() {
    this.setState({
      image: null,
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
            <Button
              onPress={async () => {
          
                const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
                if (status === 'granted') {
                  let result = await ImagePicker.launchImageLibraryAsync({
                    allowsEditing: true,
                    aspect: [4, 3],
                  });
                  if (!result.cancelled) {
                    this.setState({ image: result.uri });
                  }
                } else {
                  const { status } = await Permissions.getAsync(Permissions.CAMERA_ROLL);
                  alert("カメラの権限を許可して...!");
                }
                
              }}
            >
              select Image
            </Button>
            {this.state.image ? <Image style={{width: "100%", height: 200}} uri={this.state.image}/> : null}
          </View>
          <View
            style={styles.content}
          >
          </View>
          <View
            style={styles.content}
          >
            <Heading size="xsmall" align="center"></Heading>
          </View>
        </View>
      </Page>
    );
  }
}
