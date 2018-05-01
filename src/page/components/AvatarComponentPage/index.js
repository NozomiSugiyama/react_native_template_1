import React from "react"
import { Text, View } from "react-native"
import { Actions } from "react-native-router-flux"
import { Avatar, Heading, Page, FlexBox } from "react_native_template_1/src/components"

import styles from "./styles"

export default class extends React.Component {
  render() {
    return (
      <Page
        style={styles.host}
        {...this.props}
      >
        <Heading>Avatars</Heading>
        <View>
          <View
            style={styles.content}
          >
            <Heading size="xsmall" align="center">Standard</Heading>
            <FlexBox
              alignItems="center"
              justifyContent="space-around"
            >
              <Avatar
                size="small"
                uri="http://placehold.jp/300x300.png?text=small"
              />
              <Avatar
                size="medium"
                uri="http://placehold.jp/300x300.png?text=medium"
              />
              <Avatar
                size="large"
                uri="http://placehold.jp/300x300.png?text=large"
              />
              <Avatar
                size="xlarge"
                uri="http://placehold.jp/300x300.png?text=xlarge"
              />
            </FlexBox>
          </View>
          <View
            style={styles.content}
          >
            <Heading size="xsmall" align="center">Square</Heading>
            <FlexBox
              alignItems="center"
              justifyContent="space-around"
            >
              <Avatar
                size="small"
                rounded={false}
                uri="http://placehold.jp/300x300.png?text=small"
              />
              <Avatar
                size="medium"
                rounded={false}
                uri="http://placehold.jp/300x300.png?text=medium"
              />
              <Avatar
                size="large"
                rounded={false}
                uri="http://placehold.jp/300x300.png?text=large"
              />
              <Avatar
                size="xlarge"
                rounded={false}
                uri="http://placehold.jp/300x300.png?text=xlarge"
              />
            </FlexBox>
          </View>
          <View
            style={styles.content}
          >
            <Heading size="xsmall" align="center">Text icon</Heading>
            <FlexBox
              alignItems="center"
              justifyContent="space-around"
            >
              <Avatar
                size="small"
                rounded={false}
                title="TE"
              />
              <Avatar
                size="medium"
                title="ST"
              />
              <Avatar
                size="large"
                rounded={false}
                title="NS"
              />
              <Avatar
                size="xlarge"
                title="KK"
              />
            </FlexBox>
          </View>
        </View>
      </Page>
    );
  }
}
