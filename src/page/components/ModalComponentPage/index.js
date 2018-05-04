import React from "react"
import { View, Text, AppState } from "react-native"
import { Actions } from "react-native-router-flux"
import { Modal, Heading, Page, Button } from "react_native_template_1/src/components"

import styles from "./styles"

export default class extends React.Component {
  componentWillMount() {
    this.setState({
      modal1Visible: false,
      modal2Visible: false,
      modal3Visible: false,
      modal4Visible: false,
      modal5Visible: false,
      modal6Visible: false,
      modal7Visible: false,
      modal8Visible: false,
      modal9Visible: false,
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
              <Button onPress={() => this.setState({modal1Visible: !this.state.modal1Visible})}>type none</Button>
              <Button onPress={() => this.setState({modal2Visible: !this.state.modal2Visible})}>type primary</Button>
              <Button onPress={() => this.setState({modal3Visible: !this.state.modal3Visible})}>type secondary</Button>
              <Button onPress={() => this.setState({modal4Visible: !this.state.modal4Visible})}>type success</Button>
              <Button onPress={() => this.setState({modal5Visible: !this.state.modal5Visible})}>type danger</Button>
              <Button onPress={() => this.setState({modal6Visible: !this.state.modal6Visible})}>type warning</Button>
              <Button onPress={() => this.setState({modal7Visible: !this.state.modal7Visible})}>type info</Button>
              <Button onPress={() => this.setState({modal8Visible: !this.state.modal8Visible})}>type light</Button>
              <Button onPress={() => this.setState({modal9Visible: !this.state.modal9Visible})}>type dark</Button>
            </View>
          </View>
        </View>
        <Modal
          visible={this.state.modal1Visible}
          type="none"
        >
          <Heading>Standard Modal</Heading>
          <Text>Type none</Text>
          <Button onPress={() => this.setState({modal1Visible: false})}>Hide Modal</Button>
        </Modal>
        <Modal
          visible={this.state.modal2Visible}
          type="primary"
        >
          <Heading>Standard Modal</Heading>
          <Text>Type none</Text>
          <Button onPress={() => this.setState({modal2Visible: false})}>Hide Modal</Button>
        </Modal>
        <Modal
          visible={this.state.modal3Visible}
          type="secondary"
        >
          <Heading>Standard Modal</Heading>
          <Text></Text>
          <Button onPress={() => this.setState({modal3Visible: false})}>Hide Modal</Button>
        </Modal>
        <Modal
          visible={this.state.modal4Visible}
          type="success"
        >
          <Heading>Standard Modal</Heading>
          <Text></Text>
          <Button onPress={() => this.setState({modal4Visible: false})}>Hide Modal</Button>
        </Modal>
        <Modal
          visible={this.state.modal5Visible}
          type="danger"
        >
          <Heading>Standard Modal</Heading>
          <Text></Text>
          <Button onPress={() => this.setState({modal5Visible: false})}>Hide Modal</Button>
        </Modal>
        <Modal
          visible={this.state.modal6Visible}
          type="warning"
        >
          <Heading>Standard Modal</Heading>
          <Text></Text>
          <Button onPress={() => this.setState({modal6Visible: false})}>Hide Modal</Button>
        </Modal>
        <Modal
          visible={this.state.modal7Visible}
          type="info"
        >
          <Heading>Standard Modal</Heading>
          <Text></Text>
          <Button onPress={() => this.setState({modal7Visible: false})}>Hide Modal</Button>
        </Modal>
        <Modal
          visible={this.state.modal8Visible}
          type="light"
        >
          <Heading>Standard Modal</Heading>
          <Text></Text>
          <Button onPress={() => this.setState({modal8Visible: false})}>Hide Modal</Button>
        </Modal>
        <Modal
          visible={this.state.modal9Visible}
          type="dark"
        >
          <Heading>Standard Modal</Heading>
          <Text></Text>
          <Button onPress={() => this.setState({modal9Visible: false})}>Hide Modal</Button>
        </Modal>
      </Page>
    );
  }
}
