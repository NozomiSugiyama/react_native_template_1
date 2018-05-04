import React from "react"
import { View, Text, AppState } from "react-native"
import { Actions } from "react-native-router-flux"
import { Modal, Heading, Page, Button } from "react_native_template_1/src/components"

import styles from "./styles"

export default class extends React.Component {
  componentWillMount() {
    this.setState({
      modal1Visible: false,
      modal1Visible: false,
      modal1Visible: false,
      modal1Visible: false,
      modal1Visible: false,
    })

    AppState.addEventListener('change', this._handleAppStateChange);
  }
  render() {
    return (
      <Page
        style={styles.host}
        {...this.props}
      >
        <Heading>Modal</Heading>
        <View>
          <View
            style={styles.content}
          >
            <Heading size="xsmall" align="center">Standard</Heading>
            <View>
              <Button onPress={() => this.setState({modal1Visible: !this.state.modal1Visible})}>asdf</Button>
            </View>
          </View>
        </View>
        <Modal
          visible={this.state.modal1Visible}
          root={this}
        >
          <Heading>Standard Modal</Heading>
          <Text></Text>
          <Button onPress={() => this.setState({modal1Visible: false})}>Hide Modal</Button>
        </Modal>
      </Page>
    );
  }
}
