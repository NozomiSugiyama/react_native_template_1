import React from "react"
import { View } from "react-native"
import { Actions } from "react-native-router-flux"
import { Modal, Heading, Page, Button } from "react_native_template_1/src/components"

import styles from "./styles"

export default class extends React.Component {
  componentWillMount() {
    this.setState({

    })
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
              <Modal/>
            </View>
          </View>
        </View>
      </Page>
    );
  }
}
