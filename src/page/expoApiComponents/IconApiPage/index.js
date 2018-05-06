import React from "react"
import { Text, View } from "react-native"
import { Actions } from "react-native-router-flux"
import { Alert, Image, Button, Heading, Page, FlexBox } from "react_native_template_1/src/components"
import { ImagePicker, Permissions } from 'expo';
import { Ionicons, Entypo, MaterialIcons } from '@expo/vector-icons';
import { colors } from "config";

import styles from "./styles"

// https://docs.expo.io/versions/latest/guides/icons

export default class extends React.Component {
  componentWillMount() {
    this.setState({
      image: null,
    })
  }
  render() {
    return (
      <Page
        style={styles.host}
        {...this.props}
      >
        <Heading>Camera</Heading>
        <Alert>
          Icons from {' '}
          <Text
            style={{ color: "blue" }}
            onPress={() => Linking.openURL("https://expo.github.io/vector-icons/")}
          >
            https://expo.github.io/vector-icons/
          </Text>
        </Alert>
        <View>
          <View
            style={styles.content}
          >
            <Heading size="xsmall" align="center">Standard</Heading>
            {/* // primary secondary success danger warning info light dark */}
            <FlexBox
              justifyContent="space-around"
            >
              <Ionicons name="md-checkmark-circle" size={32} color={colors.primary[300]} />
              <Ionicons name="md-checkmark-circle" size={32} color={colors.secondary[300]} />
              <Ionicons name="md-checkmark-circle" size={32} color={colors.success[300]} />
              <Ionicons name="md-checkmark-circle" size={32} color={colors.danger[300]} />
              <Ionicons name="md-checkmark-circle" size={32} color={colors.warning[300]} />
              <Ionicons name="md-checkmark-circle" size={32} color={colors.info[300]} />
              <Ionicons name="md-checkmark-circle" size={32} color={colors.light[300]} />
              <Ionicons name="md-checkmark-circle" size={32} color={colors.dark[300]} />
            </FlexBox>
            <FlexBox
              justifyContent="space-around"
            >
              <Entypo name="add-to-list" size={32} color={colors.primary[300]} />
              <Entypo name="add-to-list" size={32} color={colors.secondary[300]} />
              <Entypo name="add-to-list" size={32} color={colors.success[300]} />
              <Entypo name="add-to-list" size={32} color={colors.danger[300]} />
              <Entypo name="add-to-list" size={32} color={colors.warning[300]} />
              <Entypo name="add-to-list" size={32} color={colors.info[300]} />
              <Entypo name="add-to-list" size={32} color={colors.light[300]} />
              <Entypo name="add-to-list" size={32} color={colors.dark[300]} />
            </FlexBox>
            <FlexBox
              justifyContent="space-around"
            >
              <MaterialIcons name="audiotrack" size={32} color={colors.primary[300]} />
              <MaterialIcons name="audiotrack" size={32} color={colors.secondary[300]} />
              <MaterialIcons name="audiotrack" size={32} color={colors.success[300]} />
              <MaterialIcons name="audiotrack" size={32} color={colors.danger[300]} />
              <MaterialIcons name="audiotrack" size={32} color={colors.warning[300]} />
              <MaterialIcons name="audiotrack" size={32} color={colors.info[300]} />
              <MaterialIcons name="audiotrack" size={32} color={colors.light[300]} />
              <MaterialIcons name="audiotrack" size={32} color={colors.dark[300]} />
            </FlexBox>
          </View>
        </View>
      </Page>
    );
  }
}
