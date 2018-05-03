import React from "react";
import { NativeModules, LayoutAnimation, Text, View } from "react-native";
import { commons } from "./style";
import Heading from "../Heading"

const { UIManager } = NativeModules;

UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

export default class extends React.Component {

  componentWillMount() {
    this.setState({
      listIsVisible: false,
      ButtonComponentHeight: 0
    })
  }
  
  render() {  
    const {
      type = "info", // primary secondary success danger warning info light dark
      style = {},
      title = "",
      children,
      ...props
    } = this.props;


    const x = Array.isArray(children) ? children.find(x => x.props.slot == "button") : children
    const ButtonComponent = React.cloneElement(
      x,
      {
        onLayout: e => {
          this.setState({
            ButtonComponentHeight: e.nativeEvent.layout.height
          });
          x.props.onPress && x.props.onPress(e)
        },
        onPress: () => {
          LayoutAnimation.configureNext({
            duration: 30,
            update: {
              type: LayoutAnimation.Types.easeInEaseOut,
            }
          });
          this.setState({ listIsVisible: !this.state.listIsVisible })
          x.props.onPress && x.props.onPress()
        },
      }
    )

    const ListComponent = Array.isArray(children) ? children.find(x => x.props.slot == "list") : View

    return (
      <View
        style={[
          commons.view,
          style
        ]}
      >
        {ButtonComponent}
        <View
          style={[
            commons.listWrapper,
            !this.state.listIsVisible && { height: 0, shadowOpacity: 0, opacity: 0 },
            { top: this.state.ButtonComponentHeight + 4}
          ]}
        >
          {ListComponent}
        </View>
      </View>
    )
  }
}
