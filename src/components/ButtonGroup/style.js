import { colors, fonts } from "config";

export const commons = {
  host: {
    overflow: "hidden",
    margin: 4
  },
  item: {
    margin: 0,
    borderWidth: 1,
    borderRadius: 0,
    marginLeft: 0,
    marginRight: 0,
    marginTop: 0,
    marginBottom: 0,
    height: 42,
    maxHeight: 42,
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
}


export const sizes = {
  button: {
    small: {
      paddingTop: 4,
      paddingBottom: 4,
      paddingEnd: 8,
      paddingLeft: 8,
    },
    medium: {
      paddingTop: 6,
      paddingBottom: 6,
      paddingRight: 12,
      paddingLeft: 12,
    },
    large: {
      paddingTop: 8,
      paddingBottom: 8,
      paddingRight: 16,
      paddingLeft: 16,
    },
  },
  text: {
    small: {
      fontSize: 14
    },
    medium: {
      fontSize: 16
    },
    large: {
      fontSize: 20
    },
  }
};

export const types = {
  button: {
    primary: {
      backgroundColor: colors.primary.main,
      borderColor: colors.primary.main,
    },
    secondary: {
      backgroundColor: colors.secondary.main,
      borderColor: colors.secondary.main,
    },
    success: {
      backgroundColor: colors.success.main,
      borderColor: colors.success.main,
    },
    danger: {
      backgroundColor: colors.danger.main,
      borderColor: colors.danger.main,
    },
    warning: {
      backgroundColor: colors.warning.main,
      borderColor: colors.warning.main,
    },
    info: {
      backgroundColor: colors.info.main,
      borderColor: colors.info.main,
    },
    light: {
      backgroundColor: colors.light.main,
      borderColor: colors.light.main,
    },
    dark:{
      backgroundColor: colors.dark.main,
      borderColor: colors.dark.main,
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
    },
  },
  outlineText: {
    primary: {
      color: colors.primary.main,
    },
    secondary: {
      color: colors.secondary.main,
    },
    success: {
      color: colors.success.main,
    },
    danger: {
      color: colors.danger.main,
    },
    warning: {
      color: colors.warning.main,
    },
    info: {
      color: colors.info.main,
    },
    light: {
      color: colors.light.main,
    },
    dark:{
      color: colors.dark.main,
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
