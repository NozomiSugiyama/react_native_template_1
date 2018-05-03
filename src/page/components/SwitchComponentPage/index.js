import React from "react"
import { Text, View } from "react-native"
import { Actions } from "react-native-router-flux"
import { Switch, Page, Heading, FlexBox } from "react_native_template_1/src/components"

import styles from "./styles"

export default class extends React.Component {
  componentWillMount() {
    this.setState({
      switch1Enabled: true,
      switch2Enabled: true,
      switch3Enabled: true,
      switch4Enabled: true,
      switch5Enabled: true,
      switch6Enabled: true,
      switch7Enabled: true,
      switch7Enabled: true,
      switch11Enabled: true,
    })
  }
  render() {
    return (
      <Page
        style={styles.host}
        {...this.props}
      >
        <Heading>Checkboxes</Heading>
        <View>
          <View
            style={styles.content}
          >
            <Heading size="xsmall" align="center">Standard</Heading>
            <FlexBox
              flexWrap
              alignItems="center"
              justifyContent="center"
              style={styles.badgeList}
            >
              <Switch
                onPress={() => this.setState({switch1Enabled: !this.state.switch1Enabled})}
                enabled={this.state.switch1Enabled}
                type="primary"
              />
              <Switch
                onPress={() => this.setState({switch2Enabled: !this.state.switch2Enabled})}
                enabled={this.state.switch2Enabled}
                type="secondary"
              />
              <Switch
                onPress={() => this.setState({switch3Enabled: !this.state.switch3Enabled})}
                enabled={this.state.switch3Enabled}
                type="success"
              />
              <Switch
                onPress={() => this.setState({switch4Enabled: !this.state.switch4Enabled})}
                enabled={this.state.switch4Enabled}
                type="danger"
              />
              <Switch
                onPress={() => this.setState({switch5Enabled: !this.state.switch5Enabled})}
                enabled={this.state.switch5Enabled}
                type="warning"
              />
              <Switch
                onPress={() => this.setState({switch6Enabled: !this.state.switch6Enabled})}
                enabled={this.state.switch6Enabled}
                type="info"
              />
              <Switch
                onPress={() => this.setState({switch7Enabled: !this.state.switch7Enabled})}
                enabled={this.state.switch7Enabled}
                type="light"
              />
              <Switch
                onPress={() => this.setState({switch8Enabled: !this.state.switch8Enabled})}
                enabled={this.state.switch8Enabled}
                type="dark"
              />
            </FlexBox>
          </View>
          <View
            style={styles.content}
          >
            <Heading size="xsmall" align="center">Widh text</Heading>
            <FlexBox
              flexWrap
              alignItems="center"
              justifyContent="center"
              style={styles.badgeList}
            >
              <Switch 
                disabledText="off"
                enabledText="on"
                onPress={() => this.setState({switch11Enabled: !this.state.switch11Enabled})}
                enabled={this.state.switch11Enabled}
              />
            </FlexBox>
          </View>
        </View>
      </Page>
    );
  }
}
