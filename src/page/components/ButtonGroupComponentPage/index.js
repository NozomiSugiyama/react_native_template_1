import React from "react"
import { Text, View } from "react-native"
import { Actions } from "react-native-router-flux"
import { Alert, Button, ButtonGroup, Heading, Page } from "react_native_template_1/src/components"
import { ListGroup, ListGroupItem } from "react_native_template_1/src/components/listGroup"

import styles from "./styles"

export default class extends React.Component {
  render() {
    return (
      <Page
        style={styles.host}
        {...this.props}
      >
        <Heading>GroupList</Heading>
        <View>
          <Alert>作成中</Alert>
          <View
            style={styles.content}
          >
            <Heading size="xsmall" align="center">Standard</Heading>
            <ButtonGroup>
              <Button>Do Le Mi</Button>
              <Button>ふぁそら</Button>
              <Button>しど♪</Button>
            </ButtonGroup>
          </View>
        </View>
      </Page>
    );
  }
}
