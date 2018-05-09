import React from "react"
import { Text, View, Linking } from "react-native"
import { Alert, Image, Button, Heading, Page, FlexBox } from "react_native_template_1/src/components"
import { ImagePicker, Permissions } from 'expo';
import { getFaceDetection } from "react_native_template_1/src/api/gcpVisionApi"
import getMimeType from "react_native_template_1/src/util/getMimeType"

import styles from "./styles"

export default class extends React.Component {
  componentWillMount() {
    this.setState({
      faceDetectionBeImage: null,
    })
  }
  
  render() {
    return (
      <Page
        style={styles.host}
        {...this.props}
      >
        <Heading>Vision Api</Heading>
        <Alert>
          Icons from {' '}
          <Text
            style={{ color: "blue" }}
            onPress={() => Linking.openURL("https://cloud.google.com/vision/docs/reference/rest/v1/images/annotate")}
          >
            https://cloud.google.com/vision/docs/reference/rest/v1/images/annotate
          </Text>
        </Alert>
        <View>
          <View
            style={styles.content}
          >
            <Heading size="xsmall" align="center">Face detection</Heading>
            <Button
              onPress={async () => {
          
                const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
                if (status === 'granted') {
                  const result = await ImagePicker.launchImageLibraryAsync({
                    allowsEditing: true,
                    aspect: [4, 3],
                    base64: true
                  });

                  if (!result.cancelled) {
                    this.setState({ faceDetectionBeImage: `data:${mimeType};base64,${result.base64.slice(4)}` });
  
                    const mimeType = getMimeType(result.uri)
                    console.log(await getFaceDetection({
                      images: [{
                        // delete jpeg magic number `/9j/`
                        content: mimeType == "image/jpeg" ? `data:${mimeType};base64,${result.base64.slice(4)}`
                               :                            `data:${mimeType};base64,${result.base64}`
                      }]
                    }))
                  }

                } else {
                  const { status } = await Permissions.getAsync(Permissions.CAMERA_ROLL);
                  alert("カメラの権限を許可して...!");
                }
                
              }}
            >
              select Image
            </Button>
            {this.state.faceDetectionBeImage ? <Image style={{width: "100%", height: 200}} uri={this.state.image}/> : null}
            {this.state.faceDetectionBeImage ? <Image style={{width: "100%", height: 200}} uri={this.state.image}/> : null}
          </View>
        </View>
      </Page>
    );
  }
}
