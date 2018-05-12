import React from "react"
import { Text, View } from "react-native"
import { Alert, Button, ExpansionPanel, Heading, Page } from "react_native_template_1/src/components"

import styles from "./styles"

export default class extends React.Component {

  componentWillMount() {
    this.setState({
      expansionOpened: false
    })
  }

  render() {
    
    return (
      <Page
        style={styles.host}
        {...this.props}
      >
        <Heading>ExpansionPanel</Heading>
        <View>
          <Button
            onPress={() => this.setState({ expansionOpened: !this.state.expansionOpened })}
          >
            {this.state.expansionOpened ? "close" : "open"}
          </Button>
          <ExpansionPanel
            visible={this.state.expansionOpened}
          >
            <Text>
              Es war einmal ein kleines süßes Mädchen, das hatte jedermann lieb, der sie nur ansah, am allerliebsten aber ihre Großmutter, die wusste gar nicht, was sie alles dem Kinde geben sollte. Einmal schenkte sie ihm ein Käppchen von rotem Samt, und weil ihm das so wohl stand, und es nichts anders mehr tragen wollte, hieß es nur das Rotkäppchen. Eines Tages sprach seine Mutter zu ihm: "Komm, Rotkäppchen, da hast du ein Stück Kuchen und eine Flasche Wein, bring das der Großmutter hinaus; sie ist krank und schwach und wird sich daran laben. Mach dich auf, bevor es heiß wird, und wenn du hinauskommst, so geh hübsch sittsam und lauf nicht vom Wege ab, sonst fällst du und zerbrichst das Glas, und die Großmutter hat nichts. Und wenn du in ihre Stube kommst, so vergiss nicht guten Morgen zu sagen und guck nicht erst in allen Ecken herum!"
            </Text>
          </ExpansionPanel>
        </View>
      </Page>
    );
  }
}
