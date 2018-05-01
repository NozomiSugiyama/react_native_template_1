import React from "react";
import { TouchableHighlight, View, Text } from "react-native";
import { Button as BaseButton } from "react-native-elements";
import { commons, types, sizes } from "./style";

export default class extends React.Component {
  
  componentWillMount() {
    this.setState({
      isShowUnderlay: false
    })
  }
  
  render() {
    const {
      children,
      outline = false,
      size = "medium", // small medium large
      type = "primary", // primary secondary success danger warning info light dark
      disabled = false,
      buttonStyle = {},
      textStyle = {},
      disabledStyle = {},
      Component = disabled ? View : TouchableHighlight,
      ...props
    } = this.props;

    return (
      <Component
        style={{
          ...commons.button,
          ...types.button[type],
          ...sizes.button[size],
          ...(
            disabled ? commons.disabledButton : {}
          ),
          ...(
            outline ? {backgroundColor: "transparent"} : {}
          ),
          ...buttonStyle
        }}
        underlayColor={!disabled && types.underlayColor[type]}
        onShowUnderlay={() => this.setState({isShowUnderlay: true})}
        onHideUnderlay={() => this.setState({isShowUnderlay: false})}
        {...props}
      >
        <Text
          style={{
            ...commons.text,
            ...types.text[type],
            ...sizes.button[size],
            ...(
              outline && !this.state.isShowUnderlay ? types.outlineText[type] : {}
            ),
            ...textStyle
          }}
        >
          {children}
        </Text>
      </Component>
    )
  }
}
