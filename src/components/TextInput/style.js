import { colors } from "config";

export const commons = {
  host: {
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 20,
    paddingRight: 20,
    marginBottom: 16,
    borderRadius: 4,
    borderWidth: 1,
    alignSelf: "stretch"
  }
}

export const types = {
  host: {
    primary: {
      borderColor: colors.primary[200],
    },
    secondary: {
      borderColor: colors.secondary[200],
    },
    success: {
      borderColor: colors.success[200],
    },
    danger: {
      borderColor: colors.danger[200],
    },
    warning: {
      borderColor: colors.warning[200],
    },
    info: {
      borderColor: colors.info[200],
    },
    light: {
      borderColor: colors.light[400],
    },
    dark:{
      borderColor: colors.dark[200],
    }
  },
  focus: {
    primary: {
      borderColor: colors.primary[300],
    },
    secondary: {
      borderColor: colors.secondary[300],
    },
    success: {
      borderColor: colors.success[300],
    },
    danger: {
      borderColor: colors.danger[300],
    },
    warning: {
      borderColor: colors.warning[300],
    },
    info: {
      borderColor: colors.info[300],
    },
    light: {
      borderColor: colors.light[100],
    },
    dark:{
      borderColor: colors.dark[300],
    }
  },
};

