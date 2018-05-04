import { colors } from "config";

// underground
import {commons as pageStyleCommons } from "../Page/style"

export const commons = {
  host: {
    backgroundColor: "rgba(0,0,0,.3)",
    position: "absolute",
    overflow: "hidden",
    paddingLeft: 32,
    paddingRight: 32,
    left: -pageStyleCommons.host.paddingLeft,
    top: -pageStyleCommons.host.paddingTop,
    paddingBottom: 64
  },
  view: {
    backgroundColor: "#fafbfd",
    padding: 16,
    borderRadius: 2
  },
}

export const types = {
  view: {
    primary: {
      backgroundColor: colors.primary[100],
    },
    secondary: {
      backgroundColor: colors.secondary[100],
    },
    success: {
      backgroundColor: colors.success[100],
    },
    danger: {
      backgroundColor: colors.danger[100],
    },
    warning: {
      backgroundColor: colors.warning[100],
    },
    info: {
      backgroundColor: colors.info[100],
    },
    light: {
      backgroundColor: colors.light[100],
    },
    dark:{
      backgroundColor: colors.dark[100],
    }
  }
};

