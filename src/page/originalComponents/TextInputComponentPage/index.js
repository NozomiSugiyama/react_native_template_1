import React from "react"
import { Text, View } from "react-native"
import { Actions } from "react-native-router-flux"
import { TextInput, Heading, Page } from "react_native_template_1/src/components"

import styles from "./styles"

export default class extends React.Component {

  componentWillMount() {
    this.setState({
      text: "change word"
    })
  }

  render() {
    return (
      <Page
        style={styles.host}
        {...this.props}
      >
        <Heading>TextInput</Heading>
        <View>
          <View
            style={styles.content}
          >
            <Heading size="xsmall" align="center">Standard</Heading>
            <TextInput type="primary" />
            <TextInput type="secondary" />
            <TextInput type="success" />
            <TextInput type="danger" />
            <TextInput type="warning" />
            <TextInput type="info" />
            <TextInput type="light" />
            <TextInput type="dark" />
          </View>
          <View
            style={styles.content}
          >
            <Heading size="xsmall" align="center">Disabled</Heading>
            <TextInput type="primary" isActive={false} />
            <TextInput type="secondary" isActive={false} />
            <TextInput type="success" isActive={false} />
          </View>
          <View
            style={styles.content}
          >
            <Heading size="xsmall" align="center">Placeholder</Heading>
            <TextInput type="primary" placeholder="primary" />
            <TextInput type="secondary" placeholder="secondary" />
            <TextInput type="success" placeholder="success" />
          </View>
          <View
            style={styles.content}
          >
            <Heading size="xsmall" align="center">Default Value</Heading>
            <TextInput type="primary" placeholder="primary" defaultValue="defaultValue" />
            <TextInput type="secondary" placeholder="secondary" defaultValue="defaultValue" />
            <TextInput type="success" placeholder="success" defaultValue="defaultValue" />
          </View>
          <View
            style={styles.content}
          >
            <Heading size="xsmall" align="center">onChange Event</Heading>
            <TextInput 
              type="primary"
              placeholder="primary"
              defaultValue={this.state.text} 
              onChangeText={text => this.setState({text})}
            />
            <Heading align="center">result: {this.state.text}</Heading>
          </View>
        </View>
      </Page>
    );
  }
}
