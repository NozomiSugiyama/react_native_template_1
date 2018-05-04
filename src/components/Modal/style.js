import { colors } from "config";

export const commons = {
  view: {
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 20,
    paddingRight: 20,
    marginBottom: 16,
    borderRadius: 4,
    borderWidth: 1,
    alignSelf: "stretch"
  },
  text: {}
}

export const types = {
  view: {
    primary: {
      backgroundColor: colors.primary[100],
      borderColor: colors.primary[200],
    },
    secondary: {
      backgroundColor: colors.secondary[100],
      borderColor: colors.secondary[200],
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
      borderColor: colors.light[500],
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
  }
};

