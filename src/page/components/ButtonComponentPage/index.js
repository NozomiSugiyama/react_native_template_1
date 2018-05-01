import React from "react"
import { Text, View } from "react-native"
import { Actions } from "react-native-router-flux"
import { Button, Heading, Page, FlexBox } from "react_native_template_1/src/components"

import styles from "./styles"

export default class extends React.Component {
  render() {
    return (
      <Page
        style={styles.host}
        {...this.props}
      >
        <Heading>Buttons</Heading>
        <View>
          <View
            style={styles.content}
          >
            <Heading size="xsmall" align="center">Standard</Heading>
            <FlexBox
              flexWrap
              alignItems="center"
              justifyContent="center"
              style={styles.badgeList}
            >
              <Button type="primary"   onPress={() => undefined}>Primary</Button>
              <Button type="secondary" onPress={() => undefined}>Secondary</Button>
              <Button type="success"   onPress={() => undefined}>Success</Button>
              <Button type="danger"    onPress={() => undefined}>Danger</Button>
              <Button type="warning"   onPress={() => undefined}>Warning</Button>
              <Button type="info"      onPress={() => undefined}>Info</Button>
              <Button type="light"     onPress={() => undefined}>Light</Button>
              <Button type="dark"      onPress={() => undefined}>Dark</Button>
            </FlexBox>
          </View>
          <View
            style={styles.content}
          >
            <Heading size="xsmall" align="center">Size</Heading>
            <FlexBox
              flexWrap
              alignItems="center"
              justifyContent="center"
              style={styles.badgeList}
            >
              <Button size="small">Small</Button>
              <Button size="medium">Medium</Button>
              <Button size="large">Large</Button>
            </FlexBox>
          </View>
          <View
            style={styles.content}
          >
            <Heading size="xsmall" align="center">Disabled</Heading>
            <FlexBox
              flexWrap
              alignItems="center"
              justifyContent="center"
              style={styles.badgeList}
            >
              <Button type="primary"   onPress={() => undefined} disabled>Primary</Button>
              <Button type="secondary" onPress={() => undefined} disabled>Secondary</Button>
              <Button type="success"   onPress={() => undefined} disabled>Success</Button>
              <Button type="danger"    onPress={() => undefined} disabled>Danger</Button>
              <Button type="warning"   onPress={() => undefined} disabled>Warning</Button>
              <Button type="info"      onPress={() => undefined} disabled>Info</Button>
              <Button type="light"     onPress={() => undefined} disabled>Light</Button>
              <Button type="dark"      onPress={() => undefined} disabled>Dark</Button>
            </FlexBox>
          </View>
          <View
            style={styles.content}
          >
            <Heading size="xsmall" align="center">Outline</Heading>
            <FlexBox
              flexWrap
              alignItems="center"
              justifyContent="center"
              style={styles.badgeList}
            >
              <Button type="primary"   onPress={() => undefined} outline>Primary</Button>
              <Button type="secondary" onPress={() => undefined} outline>Secondary</Button>
              <Button type="success"   onPress={() => undefined} outline>Success</Button>
              <Button type="danger"    onPress={() => undefined} outline>Danger</Button>
              <Button type="warning"   onPress={() => undefined} outline>Warning</Button>
              <Button type="info"      onPress={() => undefined} outline>Info</Button>
              <Button type="light"     onPress={() => undefined} outline>Light</Button>
              <Button type="dark"      onPress={() => undefined} outline>Dark</Button>
            </FlexBox>
          </View>
          <View
            style={styles.content}
          >
            <Heading size="xsmall" align="center">Japanese</Heading>
            <FlexBox
              flexWrap
              alignItems="center"
              justifyContent="center"
              style={styles.badgeList}
            >
              <Button type="primary"   japanese         >日本語</Button>
              <Button type="secondary" japanese outline>テスト</Button>
              <Button type="info"               outline>English</Button>
              <Button type="success"   japanese         >って感じ</Button>
              <Button size="small"     japanese         >てすと</Button>
              <Button size="medium" type="info" japanese>購入する！</Button>
              <Button size="large"     japanese         >次のPage</Button>
            </FlexBox>
          </View>
        </View>
      </Page>
    );
  }
}
