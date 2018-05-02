import { colors } from "config";

export const commons = {
  host: {
    height: 24,
    width: 24,
    maxHeight: 24,
    maxWidth: 24,
    margin: 4,
    borderWidth: 1,
    borderRadius: 4,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden"
  },
  disabledHost: {
    borderColor: "#e7e8ea"
  },
  disabledPallet: {
    backgroundColor: "#7e8b9a"
  },
  pallet: {
    height: 22,
    width: 22,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 2
  },
  checkMark: {
    width: 6,
    height: 10,
    transform: [{rotate: "45deg"}],
    borderBottomWidth: 2,
    borderRightWidth: 2,
    borderColor: "#FAFBFD"
  },
}

export const types = {
  host: {
    primary: {
      borderColor: colors.primary.main,
    },
    secondary: {
      borderColor: colors.secondary.main,
    },
    success: {
      borderColor: colors.success.main,
    },
    danger: {
      borderColor: colors.danger.main,
    },
    warning: {
      borderColor: colors.warning.main,
    },
    info: {
      borderColor: colors.info.main,
    },
    light: {
      borderColor: colors.light.main,
    },
    dark:{
      borderColor: colors.dark.main,
    }
  },
  pallet: {
    primary: {
      backgroundColor: colors.primary.main,
    },
    secondary: {
      backgroundColor: colors.secondary.main,
    },
    success: {
      backgroundColor: colors.success.main,
    },
    danger: {
      backgroundColor: colors.danger.main,
    },
    warning: {
      backgroundColor: colors.warning.main,
    },
    info: {
      backgroundColor: colors.info.main,
    },
    light: {
      backgroundColor: colors.light.main,
    },
    dark:{
      backgroundColor: colors.dark.main,
    }
  },
};

