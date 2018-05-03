import React from "react";
import { TouchableHighlight, View } from "react-native";
import { commons, types } from "./style";

export default ({
  isActive = true,
  checked = false,
  style = {},
  type = "primary",  // primary secondary success danger warning info light dark
  Component = isActive ? View : TouchableHighlight,
  ...props
}) =>
  <Component
    style={{
      ...commons.host,
      ...types.host[type],
      ...(
        !isActive ? commons.disabledHost 
      :             {}
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
          !isActive ? commons.disabledPallet 
        :            {}
        ),
    　   ...(
          checked || !isActive ? { opacity: 1 }
        :                        { opacity: 0 }
        )
      }}
    >
      <View
        style={{
          ...commons.checkMark,
          ...(
            type == "light" && isActive ? { borderColor: "#333" }
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