import React from "react"
import * as postApi from "react_native_template_1/src/api/jsonplaceholderApi/posts"
import { Modal, Text, View, Linking } from "react-native"
import { Alert, Button, Heading, Page } from "react_native_template_1/src/components"
import { ListGroup, ListGroupItem } from "react_native_template_1/src/components/listGroup"
import { colors } from "config"

import styles from "./styles"
// none primary secondary success danger warning info light dark
export default class extends React.Component {

  componentWillMount() {
    this.setState({
      posts: [],
      modalVisible: false
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
          <ListGroup>
          {this.state.posts.map((x, i) => 
            <ListGroupItem
              badgeText={x.userId}
              key={i}
              onPress={() => this.setState({modalVisible: true})}
            >
              {x.title}
            </ListGroupItem>
          )}
          </ListGroup>
          <Modal
            animationType="fade"
            transparent={true}
            visible={this.state.modalVisible}
            onRequestClose={() => {
              alert('Modal has been closed.');
            }}
          >
            <View 
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "rgba(0,0,0,.3)"
              }}
            >
              <View
                style={{
                  backgroundColor: "#fafbfd",
                  padding: 16
                }}
              >
                <Text>Hello World!</Text>
                <Button
                  onPress={() => {
                    this.setState({modalVisible: !this.state.modalVisible});
                  }}>
                  Hide Modal
                </Button>
              </View>
            </View>
          </Modal>
        </View>
      </Page>
    );
  }
}
