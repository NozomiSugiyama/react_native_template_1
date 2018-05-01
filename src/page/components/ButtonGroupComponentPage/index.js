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
              <Button onPress={_ => undefined}>Do Le Mi</Button>
              <Button onPress={_ => undefined}>😢😢😢</Button>
              <Button onPress={_ => undefined} japanese>しど♪</Button>
            </ButtonGroup>
            <ButtonGroup>
              <Button onPress={_ => undefined}>1</Button>
              <Button onPress={_ => undefined}>2</Button>
              <Button onPress={_ => undefined}>3</Button>
            </ButtonGroup>
            <ButtonGroup>
              <Button onPress={_ => undefined}>1</Button>
              <Button onPress={_ => undefined}>2</Button>
              <Button onPress={_ => undefined}>3</Button>
            </ButtonGroup>
            <ButtonGroup>
              <Button onPress={_ => undefined} outline>1st</Button>
              <Button onPress={_ => undefined} outline>2st</Button>
              <Button onPress={_ => undefined} outline>Module</Button>
            </ButtonGroup>
          </View>
        </View>
      </Page>
    );
  }
}
