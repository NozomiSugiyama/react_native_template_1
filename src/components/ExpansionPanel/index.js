import React from "react";
import { View, LayoutAnimation,  NativeModules } from "react-native";
import { commons } from "./style";

const { UIManager } = NativeModules;

UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

export default class extends React.Component { 
  
  componentWillMount() {
    this.setState({
      visible: false,
      height: undefined,
      borderWidth: 0
    })
  }

  componentDidMount() {
    (async () => {
      this.setState({
        visible: this.props.visible || this.state.visible
      })
    })()
  }

  componentWillReceiveProps(nextProps) {
    if ((nextProps.visible !== undefined || nextPrrops.visible !== null ) && this.state.visible !== nextProps.visible) {
      LayoutAnimation.configureNext(
          {
          duration: 200,
          update: {
            type: LayoutAnimation.Types.easeInEaseOut
          },
        },
        () => this.state.visible == false && this.setState({ borderWidth: 0 })
      );

      this.setState({ 
        borderWidth: 1,
        visible: nextProps.visible
      })
    }
  }

  render() {
    const {
      children,
      visible,
      style,
      ...props
    } = this.props

    return (
      <View
        style={[
          commons.host,
          (!visible ? { height: 0 } : { height: this.state.height + 40 }),
          { borderWidth: this.state.borderWidth },
          style
        ]}
        {...props}
      >
        <View
          style={[
            commons.view
          ]}
          onLayout={e => {
            this.setState({
              height: e.nativeEvent.layout.height,
            });
          }}
        >
          {children}
        </View>
      </View>
    )
  }
}
