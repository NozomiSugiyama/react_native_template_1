import React from "react"
import { Text, View, Linking } from "react-native"
import { Actions } from "react-native-router-flux"
import { Alert, Heading, Page, FlexBox } from "react_native_template_1/src/components"
import { ListGroup, ListGroupItem } from "react_native_template_1/src/components/listGroup"
import { colors } from "config";

import styles from "./styles"
// none primary secondary success danger warning info light dark
export default class extends React.Component {
  render() {
    return (
      <Page
        style={styles.host}
        {...this.props}
      >
        <Heading>API Client</Heading>
        <Alert>
          Use{' '}
          <Text
            style={{ color: "blue" }}
            onPress={() => Linking.openURL("https://jsonplaceholder.typicode.com/")}
          >
            https://jsonplaceholder.typicode.com/
          </Text>
        </Alert>
        <View>
        </View>
      </Page>
    );
  }
}
