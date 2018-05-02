import React from "react";
import { TouchableHighlight, View } from "react-native";
import { commons, types } from "./style";

export default ({
  disabled = false,
  checked = false,
  style = {},
  type = "primary",  // primary secondary success danger warning info light dark
  Component = disabled ? View : TouchableHighlight,
  ...props
}) =>
  <Component
    style={{
      ...commons.host,
      ...types.host[type],
      ...(
        disabled ? commons.disabledHost 
      :            {}
      ),
      ...style
    }}
    {...props}
  >
    <View
      style={{
        ...commons.pallet,
        ...types.pallet[type],
        ...(
          disabled ? commons.disabledPallet 
        :            {}
        ),
    　   ...(
          checked || disabled ? { opacity: 1 }
        :                       { opacity: 0 }
        )
      }}
    >
      <View
        style={{
          ...commons.checkMark,
          ...(
            type == "light" && !disabled ? { borderColor: "#333" }
          :                                {}
          ),
      　   ...(
            checked ? { opacity: 1 }
          :           { opacity: 0 }
          )
        }}
      />
    </View>
  </Component>