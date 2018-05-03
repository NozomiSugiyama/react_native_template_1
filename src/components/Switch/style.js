import { colors } from "config";

export const commons = {
  host: {
    marginLeft: 16,
    marginRight: 16,
    marginTop: 8,
    marginBottom: 8,
    borderTopWidth: 6,
    borderBottomWidth: 6,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderColor: "red",
    borderRadius: 24 / 2,
    minHeight: 28,
    minWidth: 64,
    maxHeight: 24,
    maxWidth: 64,
    overflow: "hidden",
    zIndex: 3
  },
  innerItem: {
    minWidth: 126,
    flex: 1,
    flexDirection: "row",
    flexWrap: "nowrap"
  },
  text: {},
  pallet: {
    maxWidth: 64 - 11,
    zIndex: 0,
    flex: 1,
    flexDirection: "row",
    flexWrap: "nowrap",
    alignItems: "center",
    justifyContent: "center",
  },
  selectorWrapper: {
    maxWidth: 0,
    overflow: "visible",
    zIndex: 1,
  },
  selector: {
    minWidth: 20,
    minHeight: 20,
    backgroundColor: "green",
    borderRadius: 20 / 2,
    position: "absolute",
    left: -11,
    zIndex: 1,
    top: -2
  },
  selectorDisabled: {
    left: -( 11 + 2 )
  },
  selectorEnabled: {
    left: - ( 64 - 11 - 2 )
  }
}

export const types = {
  host: {
    primary: {
      borderColor: colors.primary[500],
    },
    secondary: {
      borderColor: colors.secondary[500],
    },
    success: {
      borderColor: colors.success[500],
    },
    danger: {
      borderColor: colors.danger[500],
    },
    warning: {
      borderColor: colors.warning[500],
    },
    info: {
      borderColor: colors.info[500],
    },
    light: {
      borderColor: colors.light[500],
    },
    dark:{
      borderColor: colors.dark[500],
    }

  },
  enabledPallet: {
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
  },
  disabledPallet: {
    primary: {
      backgroundColor: colors.primary[300],
    },
    secondary: {
      backgroundColor: colors.secondary[300],
    },
    success: {
      backgroundColor: colors.success[300],
    },
    danger: {
      backgroundColor: colors.danger[300],
    },
    warning: {
      backgroundColor: colors.warning[300],
    },
    info: {
      backgroundColor: colors.info[300],
    },
    light: {
      backgroundColor: colors.light[300],
    },
    dark:{
      backgroundColor: colors.dark[300],
    }
  },
  text: {
    primary: {
      color: "#fafbfd"
    },
    secondary: {
      color: "#fafbfd"
    },
    success: {
      color: "#fafbfd"
    },
    danger: {
      color: "#fafbfd"
    },
    warning: {
      color: "#fafbfd"
    },
    info: {
      color: "#fafbfd"
    },
    light: {
      color: "#fafbfd"
    },
    dark:{
      color: "#fafbfd"
    }
  }
};

