import React from "react"
import { Text, View } from "react-native"
import { Actions } from "react-native-router-flux"
import { Slider, FlexBox, TextInput, Button, Heading, Page } from "react_native_template_1/src/components"
import { ImagePicker, Permissions, Speech } from 'expo';

import styles from "./styles"

// https://docs.expo.io/versions/v27.0.0/sdk/speech

export default class extends React.Component {
  componentWillMount() {
    this.setState({
      japaneseText: "こんにちは",
      japaneseVoicePitch: 1.0,
      japaneseListenButtonIsDisabled: false,
      englishText: "hello",
      englishVoicePitch: 1.0,
      englishListenButtonIsDisabled: false,
    })
  }
  render() {
    return (
      <Page
        style={styles.host}
        {...this.props}
      >
        <Heading>Speech</Heading>
        <View>
          <View
            style={styles.content}
          >
            <Heading size="xsmall" align="center">Japanese</Heading>
            <FlexBox>
              <TextInput
                style={{flex: 1}}
                onChangeText={japaneseText => this.setState({japaneseText})}
                defaultValue={this.state.japaneseText}
                multiline={true}
              />
              <Button
                disabled={this.state.japaneseListenButtonIsDisabled}
                onPress={() => {
                  Speech.speak(
                    this.state.japaneseText,
                    {
                      language: "ja", // IETF BCP 47
                      pitch: this.state.japaneseVoicePitch,
                      onStart: () => this.setState({ japaneseListenButtonIsDisabled: true }),
                      onDone: () => this.setState({ japaneseListenButtonIsDisabled: false }),
                      onError: () => this.setState({ japaneseListenButtonIsDisabled: false })
                    }
                  )
                }}
              >
                listen
              </Button>
            </FlexBox>
            <Slider
              defaultValue={this.state.japaneseVoicePitch}
              maximumValue={2.0}
              step={0.1}
              onValueChange={japaneseVoicePitch => this.setState({japaneseVoicePitch})}
            />
          </View>
          <View
            style={styles.content}
          >
            <Heading size="xsmall" align="center">English</Heading>
            <FlexBox>
              <TextInput
                style={{flex: 1}}
                onChangeText={englishText => this.setState({englishText})}
                defaultValue={this.state.englishText}
                multiline={true}
              />
              <Button
                disabled={this.state.englishListenButtonIsDisabled}
                onPress={() => {
                  Speech.speak(
                    this.state.englishText,
                    {
                      language: "en", // IETF BCP 47
                      pitch: this.state.englishVoicePitch,
                      onStart: () => this.setState({ englishListenButtonIsDisabled: true }),
                      onDone: () => this.setState({ englishListenButtonIsDisabled: false }),
                      onError: () => this.setState({ englishListenButtonIsDisabled: false })
                    }
                  )
                }}
              >
                listen
              </Button>
            </FlexBox>
            <Slider
              defaultValue={this.state.englishVoicePitch}
              maximumValue={2.0}
              step={0.1}
              onValueChange={englishVoicePitch => this.setState({englishVoicePitch})}
            />
          </View>
        </View>
      </Page>
    );
  }
}
