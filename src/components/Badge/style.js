import { colors } from "config";

export const commons = {
  view: {
    paddingTop: 4,
    paddingBottom: 4,
    paddingLeft: 6.4,
    paddingRight: 6.4,
    borderRadius: 4,
    marginLeft: 4,
    marginRight: 4,
    marginTop: 2,
    marginBottom: 2
  },
  text: {}
}

export const types = {
  view: {
    primary: {
      backgroundColor: colors.primary.main
    },
    secondary: {
      backgroundColor: colors.secondary.main
    },
    success: {
      backgroundColor: colors.success.main
    },
    danger: {
      backgroundColor: colors.danger.main
    },
    warning: {
      backgroundColor: colors.warning.main
    },
    info: {
      backgroundColor: colors.info.main
    },
    light: {
      backgroundColor: colors.light.main
    },
    dark:{
      backgroundColor: colors.dark.main
    }
  },
  text: {
    primary: {
      color: "#fff"
    },
    secondary: {
      color: "#fff"
    },
    success: {
      color: "#fff"
    },
    danger: {
      color: "#fff"
    },
    warning: {
      color: "#212529"
    },
    info: {
      color: "#fff"
    },
    light: {
      color: "#212529"
    },
    dark:{
      color: "#fff"
    }
  },
  underlayColor: {
    primary  : colors.primary.highlight,
    secondary: colors.secondary.highlight,
    success  : colors.success.highlight,
    danger   : colors.danger.highlight,
    warning  : colors.warning.highlight,
    info     : colors.info.highlight,
    light    : colors.light.highlight,
    dark     : colors.dark.highlight,
  }
};
