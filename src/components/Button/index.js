import React from "react";
import { TouchableHighlight, View, Text } from "react-native";
import { Button as BaseButton } from "react-native-elements";
import Flex from "./../FlexBox"
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
      style = {},
      textStyle = {},
      disabledStyle = {},
      Component = disabled ? View : TouchableHighlight,
      ...props
    } = this.props;

    return (
      <Flex
        component={Component}
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
          ...style
        }}
        flexDirection="row"
        justifyContent="center"
        alignItems="flex-start"
        flexWrap
        underlayColor={!disabled && types.underlayColor[type]}
        onShowUnderlay={() => this.setState({isShowUnderlay: true})}
        onHideUnderlay={() => this.setState({isShowUnderlay: false})}
        {...props}
      >
        <Text
          numberOfLines={1}
          ellipsizeMode="tail"
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
      </Flex>
    )
  }
}
