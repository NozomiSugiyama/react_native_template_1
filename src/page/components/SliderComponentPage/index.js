import React from "react"
import { Animated, Text, View } from "react-native"
import { Actions } from "react-native-router-flux"
import { Slider, Heading, Page, FlexBox } from "react_native_template_1/src/components"
import { colors } from "config";

import styles from "./styles"

export default class extends React.Component {
    state = {
        defaultValue: 50,
        squareValue: 30,
    }
    changeDefaultValue = (value) => {
      this.setState({
        defaultValue: value,
      });
    }
    changeSquareValue = (value) => {
        this.setState({
            squareValue: value,
        });
      }
    render() {
      const defaultValue = this.state.defaultValue;
      const squareValue = this.state.squareValue;
      return (
        <Page
          style={styles.host}
          {...this.props}
        >
          <Heading>Slider</Heading>
          <View>
            <View
              style={styles.content}
            >
              <Heading size="xsmall" align="center">Default</Heading>
              <Text style={styles.text}>
               Value: {defaultValue}
              </Text>
              <Slider maximumValue={100} onValueChange={this.changeDefaultValue} value={defaultValue} step={1}/>
            </View>
            <View
              style={styles.content}
            >
              <Heading size="xsmall" align="center">Square</Heading>
              <Text style={styles.text}>
              Value: {squareValue}
              </Text>
              <Slider  maximumValue={100} onValueChange={this.changeSquareValue} value={squareValue} step={1} minimumTrackTintColor={colors.primary[300]} maximumTrackTintColor={colors.primary[100]} thumbTintColor={colors.primary[500]}/>
            </View>
          </View>
        </Page>
      );
    }
}