import React from "react"
import * as postApi from "react_native_template_1/src/api/jsonplaceholderApi/posts"
import { Alert, Text, View, Linking } from "react-native"
import { Alert as AlertComponent, Button, Heading, Page } from "react_native_template_1/src/components"
import { ListGroup, ListGroupItem } from "react_native_template_1/src/components/listGroup"
import { colors } from "config"

import styles from "./styles"
// none primary secondary success danger warning info light dark
export default class extends React.Component {

  componentWillMount() {
    this.setState({
      posts: [],
    })
  }

  render() {
    return (
      <Page
        style={styles.host}
        {...this.props}
      >
        <Heading>API Client</Heading>
        <AlertComponent>
          Use{' '}
          <Text
            style={{ color: "blue" }}
            onPress={() => Linking.openURL("https://jsonplaceholder.typicode.com/")}
          >
            https://jsonplaceholder.typicode.com/
          </Text>
        </AlertComponent>
        <View
          style={styles.content}
        >
          <Heading size="xsmall" align="center">Standard</Heading>
          <Button 
            onPress={async () => {
              try {
                const posts = await postApi.read()
                this.setState({posts})
              } catch (e) {
                console.log("catch error", e)
              }
            }}
          >
            test
          </Button>
          <ListGroup>
          {this.state.posts.map((x, i) => 
            <ListGroupItem
              badgeText={x.userId}
              key={i}
              onPress={() => Alert.alert(x.title, x.body)}
            >
              {x.title}
            </ListGroupItem>
          )}
          </ListGroup>
        </View>
      </Page>
    );
  }
}
