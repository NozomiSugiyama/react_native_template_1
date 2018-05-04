import React from "react"
import { Animated, Text, View } from "react-native"
import { Actions } from "react-native-router-flux"
import { Slider, Heading, Page, FlexBox } from "react_native_template_1/src/components"

import styles from "./styles"

export default class extends React.Component {
    render() {
        return (
            <Page
                style={styles.host}
                {...this.props}
            >
                <Heading>Slider</Heading>
                <View>
                    <View
                        style={styles.content}
                    >
                        <Heading size="xsmall" align="center">Horizontal</Heading>
                        <Slider />
                    </View>
                    <View
                        style={styles.content}
                    >
                        <Heading size="xsmall" align="center">Vertical</Heading>
                        <Slider orientation="vertical"/>
                    </View>
                </View>
            </Page>
        );
    }
}