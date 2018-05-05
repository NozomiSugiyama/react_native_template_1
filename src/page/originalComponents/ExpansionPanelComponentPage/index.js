import React from "react"
import {LayoutAnimation, Text, View, NativeModules} from "react-native"
import {Actions} from "react-native-router-flux"
import {Alert, Button, ExpansionPanel, Heading, Page} from "react_native_template_1/src/components"

import styles from "./styles"

const { UIManager } = NativeModules;

UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

export default class extends React.Component {
  constructor(props){
    super(props);
    this.state={
      expansionOpened: false
    }
  }

  _onPressButton() {
    LayoutAnimation.configureNext({
      duration: 200,
      update: {
        type: LayoutAnimation.Types.linear
      },
    });
    this.setState({expansionOpened: !this.state.expansionOpened});
  }

  render() {
    const state = this.state;

    return (
      <Page
        style={styles.host}
        {...this.props}
      >
        <Heading>ExpansionPanel</Heading>
        <View>
          <Button
            type="primary"
            onPress={() => this._onPressButton()}>
            {!state.expansionOpened ? "closed" : "opened"}
            </Button>
          <ExpansionPanel
            enabled={this.state.expansionOpened}
            type = {!state.expansionOpened ? "closed" : "opened"}
          >
            <Text
              enabled={this.state.expansionOpened}
              type = {!state.expansionOpened ? "closed" : "opened"}
            >
              Animations are very important to create a great user experience. Stationary objects must overcome inertia as they start moving. Objects in motion have momentum and rarely come to a stop immediately. Animations allow you to convey physically believable motion in your interface.
              React Native provides two complementary animation systems: Animated for granular and interactive control of specific values, and LayoutAnimation for animated global layout transactions.
              The Animated API is designed to make it very easy to concisely express a wide variety of interesting animation and interaction patterns in a very performant way. Animated focuses on declarative relationships between inputs and outputs, with configurable transforms in between, and simple start/stop methods to control time-based animation execution.
              Animated exports four animatable component types: View, Text, Image, and ScrollView, but you can also create your own using Animated.createAnimatedComponent().
            </Text>
          </ExpansionPanel>
        </View>
      </Page>
    );
  }
}
