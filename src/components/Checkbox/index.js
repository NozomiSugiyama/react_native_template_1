import React from "react";
import { TouchableHighlight, View } from "react-native";
import { commons, types } from "./style";

export default ({
  isAvtive = true,
  checked = false,
  style = {},
  type = "primary",  // primary secondary success danger warning info light dark
  Component = isAvtive ? View : TouchableHighlight,
  ...props
}) =>
  <Component
    style={{
      ...commons.host,
      ...types.host[type],
      ...(
        !isAvtive ? commons.disabledHost 
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
          !isAvtive ? commons.disabledPallet 
        :            {}
        ),
    　   ...(
          checked || !isAvtive ? { opacity: 1 }
        :                       { opacity: 0 }
        )
      }}
    >
      <View
        style={{
          ...commons.checkMark,
          ...(
            type == "light" && isAvtive ? { borderColor: "#333" }
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