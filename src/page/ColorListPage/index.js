import React from "react"
import { Text, View } from "react-native"
import { Actions } from "react-native-router-flux"
import { Heading, Page, FlexBox } from "react_native_template_1/src/components"
import { ListGroup, ListGroupItem } from "react_native_template_1/src/components/listGroup"
import { colors } from "config";

import styles from "./styles"
// none primary secondary success danger warning info light dark
export default class extends React.Component {
  render() {
    return (
      <Page
        style={styles.host}
        {...this.props}
      >
        <Heading>Colors</Heading>
        <View>
          <View
            style={styles.content}
          >
            <Heading size="xsmall" align="center">Primary</Heading>
            <ListGroup>
              <ListGroupItem badgeText="100" type="light" style={{backgroundColor: colors.primary[100]}} />
              <ListGroupItem badgeText="200" type="light" style={{backgroundColor: colors.primary[200]}} />
              <ListGroupItem badgeText="300" type="light" style={{backgroundColor: colors.primary[300]}} />
              <ListGroupItem badgeText="400" type="light" style={{backgroundColor: colors.primary[400]}} />
              <ListGroupItem badgeText="500" type="light" style={{backgroundColor: colors.primary[500]}} />
            </ListGroup>
          </View>
          <View
            style={styles.content}
          >
            <Heading size="xsmall" align="center">secondary</Heading>
            <ListGroup>
              <ListGroupItem badgeText="100" type="light" style={{backgroundColor: colors.secondary[100]}} />
              <ListGroupItem badgeText="200" type="light" style={{backgroundColor: colors.secondary[200]}} />
              <ListGroupItem badgeText="300" type="light" style={{backgroundColor: colors.secondary[300]}} />
              <ListGroupItem badgeText="400" type="light" style={{backgroundColor: colors.secondary[400]}} />
              <ListGroupItem badgeText="500" type="light" style={{backgroundColor: colors.secondary[500]}} />
            </ListGroup>
          </View>
          <View
            style={styles.content}
          >
            <Heading size="xsmall" align="center">Success</Heading>
            <ListGroup>
              <ListGroupItem badgeText="100" type="light" style={{backgroundColor: colors.success[100]}} />
              <ListGroupItem badgeText="200" type="light" style={{backgroundColor: colors.success[200]}} />
              <ListGroupItem badgeText="300" type="light" style={{backgroundColor: colors.success[300]}} />
              <ListGroupItem badgeText="400" type="light" style={{backgroundColor: colors.success[400]}} />
              <ListGroupItem badgeText="500" type="light" style={{backgroundColor: colors.success[500]}} />
            </ListGroup>
          </View>
          <View
            style={styles.content}
          >
            <Heading size="xsmall" align="center">Danger</Heading>
            <ListGroup>
              <ListGroupItem badgeText="100" type="light" style={{backgroundColor: colors.danger[100]}} />
              <ListGroupItem badgeText="200" type="light" style={{backgroundColor: colors.danger[200]}} />
              <ListGroupItem badgeText="300" type="light" style={{backgroundColor: colors.danger[300]}} />
              <ListGroupItem badgeText="400" type="light" style={{backgroundColor: colors.danger[400]}} />
              <ListGroupItem badgeText="500" type="light" style={{backgroundColor: colors.danger[500]}} />
            </ListGroup>
          </View>
          <View
            style={styles.content}
          >
            <Heading size="xsmall" align="center">Warning</Heading>
            <ListGroup>
              <ListGroupItem badgeText="100" type="light" style={{backgroundColor: colors.warning[100]}} />
              <ListGroupItem badgeText="200" type="light" style={{backgroundColor: colors.warning[200]}} />
              <ListGroupItem badgeText="300" type="light" style={{backgroundColor: colors.warning[300]}} />
              <ListGroupItem badgeText="400" type="light" style={{backgroundColor: colors.warning[400]}} />
              <ListGroupItem badgeText="500" type="light" style={{backgroundColor: colors.warning[500]}} />
            </ListGroup>
          </View>
          <View
            style={styles.content}
          >
            <Heading size="xsmall" align="center">Info</Heading>
            <ListGroup>
              <ListGroupItem badgeText="100" type="light" style={{backgroundColor: colors.info[100]}} />
              <ListGroupItem badgeText="200" type="light" style={{backgroundColor: colors.info[200]}} />
              <ListGroupItem badgeText="300" type="light" style={{backgroundColor: colors.info[300]}} />
              <ListGroupItem badgeText="400" type="light" style={{backgroundColor: colors.info[400]}} />
              <ListGroupItem badgeText="500" type="light" style={{backgroundColor: colors.info[500]}} />
            </ListGroup>
          </View>
          <View
            style={styles.content}
          >
            <Heading size="xsmall" align="center">Light</Heading>
            <ListGroup>
              <ListGroupItem badgeText="100" type="light" style={{backgroundColor: colors.light[100]}} />
              <ListGroupItem badgeText="200" type="light" style={{backgroundColor: colors.light[200]}} />
              <ListGroupItem badgeText="300" type="light" style={{backgroundColor: colors.light[300]}} />
              <ListGroupItem badgeText="400" type="light" style={{backgroundColor: colors.light[400]}} />
              <ListGroupItem badgeText="500" type="light" style={{backgroundColor: colors.light[500]}} />
            </ListGroup>
          </View>
          <View
            style={styles.content}
          >
            <Heading size="xsmall" align="center">Dark</Heading>
            <ListGroup>
              <ListGroupItem badgeText="100" type="light" style={{backgroundColor: colors.dark[100]}} />
              <ListGroupItem badgeText="200" type="light" style={{backgroundColor: colors.dark[200]}} />
              <ListGroupItem badgeText="300" type="light" style={{backgroundColor: colors.dark[300]}} />
              <ListGroupItem badgeText="400" type="light" style={{backgroundColor: colors.dark[400]}} />
              <ListGroupItem badgeText="500" type="light" style={{backgroundColor: colors.dark[500]}} />
            </ListGroup>
          </View>
        </View>
      </Page>
    );
  }
}
