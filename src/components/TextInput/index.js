import React from "react";
import { TextInput } from "react-native";
import { commons, types } from "./style";
// https://facebook.github.io/react-native/docs/textinput.html
  
export default class extends React.Component {
  
  componentWillMount() {
    this.setState({
      isFocus: false
    })
  }
  
  render() {
    const {
      type = "primary", // primary secondary success danger warning info light dark
      style = {},
      children,
      isActive = true,
      editable = isActive,
      onBlur = () => undefined,
      onFocus = () => undefined,
      // multiline
      // placeholder=""
      // defaultValue=""
      // onChangeText={(text) => undefined}
      // value=""
      ...props
    } = this.props

    return (
      <TextInput
        style={[
          commons.host,
          types.host[type],
          this.state.isFocus ? types.focus[type] : {},
          style
        ]}
        onBlur={() => {
          this.setState({isFocus: false})
          onBlur()
        }}
        onFocus={() => {
          this.setState({isFocus: true})
          onFocus()
        }}
        editable={editable}
        {...props}
      />
    )
  }
}