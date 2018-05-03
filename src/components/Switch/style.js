import { colors } from "config";

export const commons = {
  host: {
    marginBottom: 16,
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
    left: - (64 - 11 - 2)
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
      borderColor: colors.light[100],
    },
    dark:{
      borderColor: colors.dark[200],
    }

  },
  disabledPallet: {
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
      borderColor: colors.light[100],
    },
    dark:{
      backgroundColor: colors.dark[100],
      borderColor: colors.dark[200],
    }
  },
  enabledPallet: {
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
      borderColor: colors.light[100],
    },
    dark:{
      backgroundColor: colors.dark[100],
      borderColor: colors.dark[200],
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
      color: colors.light[100].text
    },
    dark:{
      color: colors.dark.text
    }
  }
};

