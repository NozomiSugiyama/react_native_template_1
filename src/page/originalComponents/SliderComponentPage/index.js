import React from "react"
import { Animated, Text, View } from "react-native"
import { Actions } from "react-native-router-flux"
import { Slider, Heading, Page, FlexBox } from "react_native_template_1/src/components"
import { colors } from "config";

import styles from "./styles"

export default class extends React.Component {

  componentWillMount() {
    this.setState({
      sliderValue: 50
    })
  }

  render() {
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
            <Heading size="xsmall" align="center">Standard</Heading>
            <Slider type="primary" />
            <Slider type="secondary" />
            <Slider type="success" />
            <Slider type="danger" />
            <Slider type="warning" />
            <Slider type="info" />
            <Slider type="light" />
            <Slider type="dark" />
          </View>
          <View
            style={styles.content}
          >
            <Heading size="xsmall" align="center">Disabled</Heading>
            <Slider type="primary" disabled value={0} maximumValue={100} />
            <Slider type="secondary" disabled value={0} maximumValue={100} />
            <Slider type="success" disabled value={20} maximumValue={100} />
            <Slider type="danger" disabled value={40} maximumValue={100} />
            <Slider type="warning" disabled value={60} maximumValue={100} />
            <Slider type="info" disabled value={80} maximumValue={100} />
            <Slider type="light" disabled value={100} maximumValue={100} />
            <Slider type="dark" disabled value={100} maximumValue={100} />
          </View>
          <View
            style={styles.content}
          >
            <Heading size="xsmall" align="center">Change Event</Heading>
            <Slider 
              type="primary"
              defaultValue={this.state.sliderValue}
              maximumValue={100}
              step={1}
              onValueChange={sliderValue => this.setState({sliderValue})}
            />
            <Heading>result: {this.state.sliderValue || this.state.sliderInitialValue}</Heading>
          </View>
        </View>
      </Page>
    );
  }
}