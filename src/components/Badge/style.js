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
      backgroundColor: colors.primary[300]
    },
    secondary: {
      backgroundColor: colors.secondary[300]
    },
    success: {
      backgroundColor: colors.success[300]
    },
    danger: {
      backgroundColor: colors.danger[300]
    },
    warning: {
      backgroundColor: colors.warning[300]
    },
    info: {
      backgroundColor: colors.info[300]
    },
    light: {
      backgroundColor: colors.light[100]
    },
    dark:{
      backgroundColor: colors.dark[300]
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
