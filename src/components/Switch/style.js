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
      backgroundColor: colors.primary.light,
      borderColor: colors.primary.border,
    },
    secondary: {
      backgroundColor: colors.secondary.light,
      borderColor: colors.secondary.border,
    },
    success: {
      backgroundColor: colors.success.light,
      borderColor: colors.success.border,
    },
    danger: {
      backgroundColor: colors.danger.light,
      borderColor: colors.danger.border,
    },
    warning: {
      backgroundColor: colors.warning.light,
      borderColor: colors.warning.border,
    },
    info: {
      backgroundColor: colors.info.light,
      borderColor: colors.info.border,
    },
    light: {
      backgroundColor: colors.light.light,
      borderColor: colors.light.border,
    },
    dark:{
      backgroundColor: colors.dark.light,
      borderColor: colors.dark.border,
    }

  },
  disabledPallet: {
    primary: {
      backgroundColor: colors.primary.light,
      borderColor: colors.primary.border,
    },
    secondary: {
      backgroundColor: colors.secondary.light,
      borderColor: colors.secondary.border,
    },
    success: {
      backgroundColor: colors.success.light,
      borderColor: colors.success.border,
    },
    danger: {
      backgroundColor: colors.danger.light,
      borderColor: colors.danger.border,
    },
    warning: {
      backgroundColor: colors.warning.light,
      borderColor: colors.warning.border,
    },
    info: {
      backgroundColor: colors.info.light,
      borderColor: colors.info.border,
    },
    light: {
      backgroundColor: colors.light.light,
      borderColor: colors.light.border,
    },
    dark:{
      backgroundColor: colors.dark.light,
      borderColor: colors.dark.border,
    }
  },
  enabledPallet: {
    primary: {
      backgroundColor: colors.primary.light,
      borderColor: colors.primary.border,
    },
    secondary: {
      backgroundColor: colors.secondary.light,
      borderColor: colors.secondary.border,
    },
    success: {
      backgroundColor: colors.success.light,
      borderColor: colors.success.border,
    },
    danger: {
      backgroundColor: colors.danger.light,
      borderColor: colors.danger.border,
    },
    warning: {
      backgroundColor: colors.warning.light,
      borderColor: colors.warning.border,
    },
    info: {
      backgroundColor: colors.info.light,
      borderColor: colors.info.border,
    },
    light: {
      backgroundColor: colors.light.light,
      borderColor: colors.light.border,
    },
    dark:{
      backgroundColor: colors.dark.light,
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
  }
};

