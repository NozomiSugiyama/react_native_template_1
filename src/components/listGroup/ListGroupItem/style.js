import { colors } from "config";

export const commons = {
  view: {
    backgroundColor: "#fff",
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 20,
    paddingRight: 20,
    alignSelf: 'stretch',
    minHeight: 42
  },
  text: {},
  badge: {},
  activeView: {
    backgroundColor: colors.primary.main
  },
  activeText: {
    color: "#FFF"
  },
  disabledView: {
    backgroundColor: "#fff"
  },
  disabledText: {
    color: "#6c757d"
  }
}

export const types = {
  view: {
    none: {
      borderTopColor: "#dfdfdf",
    },
    primary: {
      backgroundColor: colors.primary.deep,
      borderTopColor: colors.primary.border,
    },
    secondary: {
      backgroundColor: colors.secondary.deep,
      borderTopColor: colors.secondary.border,
    },
    success: {
      backgroundColor: colors.success.deep,
      borderColor: colors.success.border,
    },
    danger: {
      backgroundColor: colors.danger.deep,
      borderColor: colors.danger.border,
    },
    warning: {
      backgroundColor: colors.warning.deep,
      borderColor: colors.warning.border,
    },
    info: {
      backgroundColor: colors.info.deep,
      borderColor: colors.info.border,
    },
    light: {
      backgroundColor: colors.light.deep,
      borderColor: colors.light.border,
    },
    dark:{
      backgroundColor: colors.dark.deep,
      borderColor: colors.dark.border,
    }
  },
  text: {
    primary: {
      color: colors.primary.text
    },
    secondary: {
      color: colors.secondary.text
    },
    success: {
      color: colors.success.text
    },
    danger: {
      color: colors.danger.text
    },
    warning: {
      color: colors.warning.text
    },
    info: {
      color: colors.info.text
    },
    light: {
      color: colors.light.text
    },
    dark:{
      color: colors.dark.text
    }
  },
  underlayColor: {
    none: "#f8f9fa",
    primary: "#9fcdff",
    secondary: "#c8cbcf",
    success: "#b1dfbb",
    danger: "#f1b0b7",
    warning: "#ffe8a1",
    info: "#abdde5",
    light: "#ececf6",
    dark: "#b9bbbe"
  }
};

