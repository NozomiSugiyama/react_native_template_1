import React from "react"
import { Text, View, Linking } from "react-native"
import { Alert, Image, Button, Heading, Page, FlexBox } from "react_native_template_1/src/components"
import { ImagePicker, Permissions } from 'expo';
import { getFaceDetection } from "react_native_template_1/src/api/gcpVisionApi"

import styles from "./styles"

export default class extends React.Component {
  componentWillMount() {
    this.setState({
      faceDetectionImage: null,
      faceDetectionApiResult: null
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
            <Heading size="xsmall" align="center">Face Detection</Heading>
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
                    this.setState({ faceDetectionImage: result.uri });

                    this.setState({
                      faceDetectionApiResult: await getFaceDetection({ images: [{ content: result.base64 }] })
                    })
                  }

                } else {
                  const { status } = await Permissions.getAsync(Permissions.CAMERA_ROLL);
                  alert("カメラの権限を許可して...!");
                }
                
              }}
            >
              select Image
            </Button>
            {this.state.faceDetectionImage ? <Image style={{width: "100%", height: 200}} uri={this.state.faceDetectionImage}/> : null}
            {this.state.faceDetectionApiResult ? <Alert>{JSON.stringify(this.state.faceDetectionApiResult)}</Alert> : null}
          </View>
        </View>
      </Page>
    );
  }
}
