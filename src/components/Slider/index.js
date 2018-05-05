import React from "react"
import { Slider, Text, View } from "react-native"
import { commons, types } from "./style"

// https://facebook.github.io/react-native/docs/slider.html#minimumtracktintcolor

export default class extends React.Component {
  componentWillMount() {
    this.setState({
      defaultValue: undefined
    })
  }

  componentDidMount() {
    (async () => {
      this.setState({
        defaultValue: this.props.defaultValue
      })
    })()
  }

  render() {
    const {
      type = "primary", // primary secondary success danger warning info light dark
      disabled,
      value,
      style = {},
      thumbTintColor = types.thumbTintColor[type], // android only
      minimumTrackTintColor = types.minimumTrackTintColor[type],
      maximumTrackTintColor = types.maximumTrackTintColor[type],
      ...props
    } = this.props

    return (
      <Slider
        disabled={disabled}
        style={[
          commons.host,
          disabled ? { opacity: 0.7 } : {},
          style
        ]}
        value={!value && this.state.defaultValue ? this.state.defaultValue : value}
        thumbTintColor={thumbTintColor}
        minimumTrackTintColor={minimumTrackTintColor}
        maximumTrackTintColor={maximumTrackTintColor}
        {...props}
      />
    )
  }
}
