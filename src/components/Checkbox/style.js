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
      borderColor: colors.light[300],
    },
    dark:{
      borderColor: colors.dark[300],
    }
  },
  pallet: {
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
};

