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
    backgroundColor: colors.primary[300]
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
      backgroundColor: colors.primary[100],
      borderTopColor: colors.primary[200],
    },
    secondary: {
      backgroundColor: colors.secondary[100],
      borderTopColor: colors.secondary[200],
    },
    success: {
      backgroundColor: colors.success[100],
      borderColor: colors.success[200],
    },
    danger: {
      backgroundColor: colors.danger[100],
      borderColor: colors.danger[200],
    },
    warning: {
      backgroundColor: colors.warning[100],
      borderColor: colors.warning[200],
    },
    info: {
      backgroundColor: colors.info[100],
      borderColor: colors.info[200],
    },
    light: {
      backgroundColor: colors.light[100],
      borderColor: colors.light[200],
    },
    dark:{
      backgroundColor: colors.dark[100],
      borderColor: colors.dark[200],
    }
  },
  text: {
    primary: {
      color: colors.primary[500]
    },
    secondary: {
      color: colors.secondary[500]
    },
    success: {
      color: colors.success[500]
    },
    danger: {
      color: colors.danger[500]
    },
    warning: {
      color: colors.warning[500]
    },
    info: {
      color: colors.info[500]
    },
    light: {
      color: colors.light[500]
    },
    dark:{
      color: colors.dark[500]
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

