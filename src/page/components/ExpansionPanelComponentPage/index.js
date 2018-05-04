import React from "react"
import { Animated, Text, View } from "react-native"
import { Actions } from "react-native-router-flux"
import { Alert, Heading, Page } from "react_native_template_1/src/components"

import styles from "./styles"

export default class extends React.Component {
    render() {
        return (
            <Page
                style={styles.host}
                {...this.props}
            >
                <Heading>ExpansionPanel</Heading>
                <View>

                </View>
            </Page>
        );
    }
}
