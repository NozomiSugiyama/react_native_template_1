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
      switch8Enabled: true,
      switch11Enabled: true,
      switch12Enabled: true,
      switch13Enabled: true,
      switch14Enabled: true,
      switch15Enabled: true,
      switch16Enabled: true,
      switch17Enabled: true,
      switch18Enabled: true,
      switch21Enabled: true,
      switch22Enabled: true,
      switch23Enabled: true,
      switch24Enabled: true,
    })
  }
  render() {
    return (
      <Page
        style={styles.host}
        {...this.props}
      >
        <Heading>Switches</Heading>
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
                onPress={() => this.setState({switch11Enabled: !this.state.switch11Enabled})}
                enabled={this.state.switch11Enabled}
                type="primary"
                disabledText="no"
                enabledText="yes"
              />
              <Switch
                onPress={() => this.setState({switch12Enabled: !this.state.switch12Enabled})}
                enabled={this.state.switch12Enabled}
                type="secondary"
                disabledText="false"
                enabledText="true"
              />
              <Switch
                onPress={() => this.setState({switch13Enabled: !this.state.switch13Enabled})}
                enabled={this.state.switch13Enabled}
                type="success"
                disabledText="hide"
                enabledText="view"
              />
              <Switch
                onPress={() => this.setState({switch14Enabled: !this.state.switch14Enabled})}
                enabled={this.state.switch14Enabled}
                type="danger"
                disabledText="off"
                enabledText="on"
              />
              <Switch
                onPress={() => this.setState({switch15Enabled: !this.state.switch15Enabled})}
                enabled={this.state.switch15Enabled}
                type="warning"
                disabledText="0"
                enabledText="1"
              />
              <Switch
                onPress={() => this.setState({switch16Enabled: !this.state.switch16Enabled})}
                enabled={this.state.switch16Enabled}
                type="info"
                disabledText="✖︎"
                enabledText="⚪︎"
              />
              <Switch
                onPress={() => this.setState({switch17Enabled: !this.state.switch17Enabled})}
                enabled={this.state.switch17Enabled}
                type="light"
                disabledText="NO"
                enabledText="YES"
              />
              <Switch
                onPress={() => this.setState({switch18Enabled: !this.state.switch18Enabled})}
                enabled={this.state.switch18Enabled}
                type="dark"
                disabledText="back"
                enabledText="go"
              />
            </FlexBox>
          </View>
          <View
            style={styles.content}
          >
            <Heading size="xsmall" align="center">Square Switch</Heading>
            <FlexBox
              flexWrap
              alignItems="center"
              justifyContent="center"
              style={styles.badgeList}
            >
              <Switch
                onPress={() => this.setState({switch21Enabled: !this.state.switch21Enabled})}
                enabled={this.state.switch21Enabled}
                type="primary"
                pill={false}
              />
              <Switch
                onPress={() => this.setState({switch22Enabled: !this.state.switch22Enabled})}
                enabled={this.state.switch22Enabled}
                type="secondary"
                disabledText="no"
                enabledText="yes"
                pill={false}
              />
              <Switch
                onPress={() => this.setState({switch23Enabled: !this.state.switch23Enabled})}
                enabled={this.state.switch23Enabled}
                type="success"
                disabledText="no"
                enabledText="yes"
                pill={false}
              />
            </FlexBox>
          </View>
          <View
            style={styles.content}
          >
            <Heading size="xsmall" align="center">Disabled</Heading>
            <FlexBox
              flexWrap
              alignItems="center"
              justifyContent="center"
              style={styles.badgeList}
            >
              <Switch
                onPress={() => undefined}
                enabled={true}
                type="primary"
                disabledText="no"
                enabledText="yes"
              />
              <Switch
                onPress={() => undefined}
                enabled={this.state.switch22Enabled}
                type="secondary"
                pill={false}
              />
              <Switch
                onPress={() => undefined}
                enabled={this.state.switch23Enabled}
                type="success"
                disabledText="no"
                enabledText="yes"
                pill={false}
              />
            </FlexBox>
          </View>
        </View>
      </Page>
    );
  }
}
