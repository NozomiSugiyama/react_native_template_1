import React from "react"
import { Text, View } from "react-native"
import { Actions } from "react-native-router-flux"
import { Alert, Heading, Page } from "react_native_template_1/src/components"

import styles from "./styles"

export default class extends React.Component {
  render() {
    return (
      <Page
        style={styles.host}
        {...this.props}
      >
        <Heading>Alerts</Heading>
        <View>
          <View
            style={styles.content}
          >
            <Heading size="xsmall" align="center">Standard</Heading>
            <Alert type="primary"  >A alert component of primary type</Alert>
            <Alert type="secondary">A alert component of secondary type</Alert>
            <Alert type="success"  >A alert component of success type</Alert>
            <Alert type="danger"   >A alert component of danger type</Alert>
            <Alert type="warning"  >A alert component of warning type</Alert>
            <Alert type="info"     >A alert component of info type</Alert>
            <Alert type="light"    >A alert component of light type</Alert>
            <Alert type="dark"     >A alert component of dark type</Alert>
          </View>
          <View
            style={styles.content}
          >
            <Heading size="xsmall" align="center">With a title</Heading>
            <Alert title="Info">
              A alert component of primary type.
              1234567890{'\n'}
              abcdefghijklmnopqrstuvwxy
              ABCDEFGHIJKLMNOPQRSTUVWXYZ
            </Alert>
          </View>
        </View>
      </Page>
    );
  }
}
