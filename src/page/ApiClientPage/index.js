import React from "react"
import * as postApi from "react_native_template_1/src/api/jsonplaceholderApi/posts"
import { Text, View, Linking } from "react-native"
import { Alert, Button, Heading, Page } from "react_native_template_1/src/components"
import { colors } from "config"

import styles from "./styles"
// none primary secondary success danger warning info light dark
export default class extends React.Component {

  componentWillMount() {
    this.setState({
      posts: []
    })
  }

  render() {
    return (
      <Page
        style={styles.host}
        {...this.props}
      >
        <Heading>API Client</Heading>
        <Alert>
          Use{' '}
          <Text
            style={{ color: "blue" }}
            onPress={() => Linking.openURL("https://jsonplaceholder.typicode.com/")}
          >
            https://jsonplaceholder.typicode.com/
          </Text>
        </Alert>
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
          {this.state.posts.map((x, i) => 
            <View
              key={i}
            >
              <Text>{x.userId}</Text>
              <Text>{x.title}</Text>
              <Text>{x.body}</Text>
            </View>
          )}
        </View>
      </Page>
    );
  }
}
