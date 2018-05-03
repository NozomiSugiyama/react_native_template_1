import React from "react"
import { Text, View } from "react-native"
import { Actions } from "react-native-router-flux"
import { Heading, Page, Checkbox, Dropdown, Button } from "react_native_template_1/src/components"
import { ListGroup, ListGroupItem } from "react_native_template_1/src/components/listGroup"

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
        <Heading>Checkboxes</Heading>
        <View>
          <View
            style={styles.content}
          >
            <Heading size="xsmall" align="center">Standard</Heading>
            <View>
              <Dropdown style={{width: 90}}>
                <Button slot="button">test</Button>
                <ListGroup slot="list">
                  <ListGroupItem onPress={() => undefined}>Ludwig van Beethoven</ListGroupItem>
                  <ListGroupItem onPress={() => undefined}>Johann Sebastian Bach</ListGroupItem>
                  <ListGroupItem onPress={() => undefined}>Johannes Brahms</ListGroupItem>
                </ListGroup>
              </Dropdown>
            </View>
          </View>
        </View>
      </Page>
    );
  }
}
