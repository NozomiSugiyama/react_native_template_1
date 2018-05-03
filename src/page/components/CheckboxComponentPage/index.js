import React from "react"
import { Text, View } from "react-native"
import { Actions } from "react-native-router-flux"
import { Heading, Page, Checkbox, FlexBox } from "react_native_template_1/src/components"

import styles from "./styles"

export default class extends React.Component {
  componentWillMount() {
    this.setState({
      checkbox1: true,
      checkbox2: true,
      checkbox3: true,
      checkbox4: true,
      checkbox5: true,
      checkbox6: true,
      checkbox7: true,
      checkbox8: true,
      checkbox11: true,
      checkbox12: false,
      checkbox13: true,
      checkbox14: false,
      checkbox15: true,
      checkbox16: false,
      checkbox17: true,
      checkbox18: false,
    })
  }
  render() {
    return (
      <Page
        style={styles.host}
        {...this.props}
      >
        <Heading>Checkboxes</Heading>
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
              <Checkbox type="primary"   onPress={() => this.setState({checkbox1: !this.state.checkbox1})} checked={this.state.checkbox1} />
              <Checkbox type="secondary" onPress={() => this.setState({checkbox2: !this.state.checkbox2})} checked={this.state.checkbox2} />
              <Checkbox type="success"   onPress={() => this.setState({checkbox3: !this.state.checkbox3})} checked={this.state.checkbox3} />
              <Checkbox type="danger"    onPress={() => this.setState({checkbox4: !this.state.checkbox4})} checked={this.state.checkbox4} />
              <Checkbox type="warning"   onPress={() => this.setState({checkbox5: !this.state.checkbox5})} checked={this.state.checkbox5} />
              <Checkbox type="info"      onPress={() => this.setState({checkbox6: !this.state.checkbox6})} checked={this.state.checkbox6} />
              <Checkbox type="light"     onPress={() => this.setState({checkbox7: !this.state.checkbox7})} checked={this.state.checkbox7} />
              <Checkbox type="dark"      onPress={() => this.setState({checkbox8: !this.state.checkbox8})} checked={this.state.checkbox8} />
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
              <Checkbox type="primary"   isActive={false} onPress={() => this.setState({checkbox11: !this.state.checkbox11})} checked={this.state.checkbox11} />
              <Checkbox type="secondary" isActive={false} onPress={() => this.setState({checkbox12: !this.state.checkbox12})} checked={this.state.checkbox12} />
              <Checkbox type="success"   isActive={false} onPress={() => this.setState({checkbox13: !this.state.checkbox13})} checked={this.state.checkbox13} />
              <Checkbox type="danger"    isActive={false} onPress={() => this.setState({checkbox14: !this.state.checkbox14})} checked={this.state.checkbox14} />
              <Checkbox type="warning"   isActive={false} onPress={() => this.setState({checkbox15: !this.state.checkbox15})} checked={this.state.checkbox15} />
              <Checkbox type="info"      isActive={false} onPress={() => this.setState({checkbox16: !this.state.checkbox16})} checked={this.state.checkbox16} />
              <Checkbox type="light"     isActive={false} onPress={() => this.setState({checkbox17: !this.state.checkbox17})} checked={this.state.checkbox17} />
              <Checkbox type="dark"      isActive={false} onPress={() => this.setState({checkbox18: !this.state.checkbox18})} checked={this.state.checkbox18} />
            </FlexBox>
          </View>
        </View>
      </Page>
    );
  }
}
