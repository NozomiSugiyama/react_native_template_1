import { colors, fonts } from "config";

export const commons = {
  button: {
    borderWidth: 1,
    borderRadius: 4,
    marginLeft: 4,
    marginRight: 4,
    marginTop: 2,
    marginBottom: 2,
  },
  disabledButton: {
    opacity: 0.65
  },
  text: {
    ...fonts.fontPrimarySemiBold,
    textAlign: "center",
    fontWeight: "400",
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
      backgroundColor: colors.primary[300],
      borderColor: colors.primary[300],
    },
    secondary: {
      backgroundColor: colors.secondary[300],
      borderColor: colors.secondary[300],
    },
    success: {
      backgroundColor: colors.success[300],
      borderColor: colors.success[300],
    },
    danger: {
      backgroundColor: colors.danger[300],
      borderColor: colors.danger[300],
    },
    warning: {
      backgroundColor: colors.warning[300],
      borderColor: colors.warning[300],
    },
    info: {
      backgroundColor: colors.info[300],
      borderColor: colors.info[300],
    },
    light: {
      backgroundColor: colors.light[300],
      borderColor: colors.light[300],
    },
    dark:{
      backgroundColor: colors.dark[300],
      borderColor: colors.dark[300],
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
      color: colors.primary[300],
    },
    secondary: {
      color: colors.secondary[300],
    },
    success: {
      color: colors.success[300],
    },
    danger: {
      color: colors.danger[300],
    },
    warning: {
      color: colors.warning[300],
    },
    info: {
      color: colors.info[300],
    },
    light: {
      color: colors.light[300],
    },
    dark:{
      color: colors.dark[300],
    }
  },
  underlayColor: {
    primary  : colors.primary[400],
    secondary: colors.secondary[400],
    success  : colors.success[400],
    danger   : colors.danger[400],
    warning  : colors.warning[400],
    info     : colors.info[400],
    light    : colors.light[400],
    dark     : colors.dark[400],
  }
};
