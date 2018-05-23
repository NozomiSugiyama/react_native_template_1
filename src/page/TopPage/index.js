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
            <Heading size="small" style={{alignSelf: "flex-start"}}>Original Components</Heading>
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
              <ListGroupItem onPress={() => Actions.checkboxComponentPage()}>Checkbox</ListGroupItem>
              <ListGroupItem onPress={() => Actions.dropdownComponentPage()}>Dropdown</ListGroupItem>
              <ListGroupItem onPress={() => Actions.expansionPanelComponentPage()}>ExpansionPanel</ListGroupItem>
              <ListGroupItem onPress={() => Actions.headingComponentPage()}>Heading</ListGroupItem>
              <ListGroupItem onPress={() => Actions.listGroupComponentPage()}>ListGroup</ListGroupItem>
              <ListGroupItem onPress={() => Actions.modalComponentPage()}>Modal</ListGroupItem>
              <ListGroupItem onPress={() => Actions.sliderComponentPage()}>Slider</ListGroupItem>
              <ListGroupItem onPress={() => Actions.switchComponentPage()}>Switch</ListGroupItem>
              <ListGroupItem onPress={() => Actions.textInputComponentPage()}>TextInput</ListGroupItem>
              <ListGroupItem onPress={() => Actions.animatedComponentPage()}>Animated</ListGroupItem>
            </ListGroup>
            <View>
              <Heading size="small" style={{alignSelf: "flex-start"}}>utility</Heading>
              <Button onPress={() => Actions.colorListPage()}>Colors</Button>
              <Button onPress={() => Actions.apiClientPage()}>RESTAPI Client</Button>
            </View>
            <Heading size="small" style={{alignSelf: "flex-start"}}>Expo Api</Heading>
            <ListGroup
              style={{
                width: 300
              }}
            >
              <ListGroupItem onPress={() => Actions.cameraApiPage()}>Camera</ListGroupItem>
              <ListGroupItem onPress={() => Actions.iconApiPage()}>Icon</ListGroupItem>
              <ListGroupItem onPress={() => Actions.imagePickerApiPage()}>Image Picker</ListGroupItem>
              <ListGroupItem onPress={() => Actions.notificationApiPage()}>Notification</ListGroupItem>
              <ListGroupItem onPress={() => Actions.speechApiPage()}>Speech</ListGroupItem>
            </ListGroup>
            <Heading size="small" style={{alignSelf: "flex-start"}}>Google Cloud Api</Heading>
            <ListGroup
              style={{
                width: 300
              }}
            >
              <ListGroupItem onPress={() => Actions.googleCloudVisionApiPage()}>Vision Api</ListGroupItem>
            </ListGroup>
          </View>
        </FlexBox>
      </Page>
    );
  }
}
