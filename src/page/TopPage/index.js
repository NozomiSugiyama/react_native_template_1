import React from "react"
import { Text, View } from "react-native"
import { Actions } from "react-native-router-flux"
import { Page, Button, Heading, Avatar, FlexBox, Switch } from "react_native_template_1/src/components"
import { ListGroup, ListGroupItem } from "react_native_template_1/src/components/listGroup"
import avatarImage from "react_native_template_1/assets/images/avatar.jpg"

import styles from "./styles"

export default class extends React.Component {
  componentWillMount() {
    this.setState({
      switch1Enabled: false,
      switch2Enabled: false,
    })
  }

  render() {
    return (
      <Page> 
        <FlexBox
          flexDirection="column"
          alignItems="center"
          justifyContent="space-around"
          style={styles.host}
        >
          <View>
            <Avatar
              size="xlarge"
              source={avatarImage}
            />
            <Heading size="large">template 1</Heading>
          </View>
          <View>
            <Heading size="small" style={{alignSelf: "flex-start"}}>components</Heading>
            <ListGroup
              style={{
                width: 300
              }}
            >
              <ListGroupItem onPress={() => Actions.alertComponentPage()}>Alert</ListGroupItem>
              <ListGroupItem onPress={() => Actions.avatarComponentPage()}>Avatar</ListGroupItem>
              <ListGroupItem onPress={() => Actions.badgeComponentPage()}>Badge</ListGroupItem>
              <ListGroupItem onPress={() => Actions.buttonComponentPage()}>Button</ListGroupItem>
              <ListGroupItem onPress={() => Actions.buttonGroupComponentPage()}>ButtonGroup</ListGroupItem>
              <ListGroupItem onPress={() => Actions.CheckboxComponentPage()}>Checkbox</ListGroupItem>
              <ListGroupItem onPress={() => Actions.headingComponentPage()}>Heading</ListGroupItem>
              <ListGroupItem onPress={() => Actions.listGroupComponentPage()}>ListGroup</ListGroupItem>
            </ListGroup>
          </View>
          <Switch
            onPress={() => this.setState({switch1Enabled: !this.state.switch1Enabled})}
            enabled={this.state.switch1Enabled}
          />
          <Switch 
            disabledText="off"
            enabledText="on"
            onPress={() => this.setState({switch2Enabled: !this.state.switch2Enabled})}
            enabled={this.state.switch2Enabled}
          />
        </FlexBox>
      </Page>
    );
  }
}
