import React from "react"
import { Picker, Text, View } from "react-native"
import { Actions } from "react-native-router-flux"
import { Alert, Heading, Page, Checkbox, Dropdown, Button } from "react_native_template_1/src/components"
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
        <Heading>Dropdown</Heading>
        <Alert>未完成 committer募集中</Alert>
        <View>
          <View
            style={styles.content}
          >
            <Heading size="xsmall" align="center">Standard</Heading>
            <View>
              <Dropdown style={{width: 90}}>
                <Button slot="button">test</Button>
                <ListGroup slot="list">
                  <ListGroupItem onPress={() => console.log("click item 1")}>item 1</ListGroupItem>
                  <ListGroupItem onPress={() => console.log("click item 2")}>item 2</ListGroupItem>
                  <ListGroupItem onPress={() => console.log("click item 3")}>item 3</ListGroupItem>
                  <ListGroupItem onPress={() => console.log("click item 4")}>item 4</ListGroupItem>
                </ListGroup>
              </Dropdown>
            </View>
          </View>
          <View
            style={styles.content}
          >
            <Heading size="xsmall" align="center">Native</Heading>
            <View>
              <Picker
                selectedValue={"item3"}
                onValueChange={(itemValue, itemIndex) => console.log(`select ${itemValue}`)}
              >
                <Picker.Item label="item 1" value="item1" />
                <Picker.Item label="item 2" value="item2" />
                <Picker.Item label="item 3" value="item3" />
                <Picker.Item label="item 4" value="item4" />
              </Picker>
            </View>
          </View>
        </View>
      </Page>
    );
  }
}
