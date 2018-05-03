import { colors } from "config";

export const commons = {
  host: {
    marginLeft: 16,
    marginRight: 16,
    marginTop: 8,
    marginBottom: 8,
    borderRadius: 24 / 2,
    minHeight: 28,
    minWidth: 64,
    maxHeight: 24,
    maxWidth: 64,
    overflow: "hidden",
    zIndex: 3,
    padding: 6,
    paddingRight: 9.6,
    paddingLeft: 9.6
  },
  disabledHost: {
    backgroundColor: "#7e8b9a"
  },
  enabledHost: {
    backgroundColor: "#34485e"
  },
  innerItem: {
    minWidth: 126,
    flex: 1,
    flexDirection: "row",
    flexWrap: "nowrap"
  },
  text: {
    color: "white"
  },
  enabledText: {
    paddingRight: 6
  },
  disabledText: {
    paddingLeft: 6
  },
  pallet: {
    maxWidth: 64 - 11,
    zIndex: 0,
    flex: 1,
    flexDirection: "row",
    flexWrap: "nowrap",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden"
  },
  selectorWrapper: {
    maxWidth: 0,
    overflow: "visible",
    zIndex: 1,
  },
  selector: {
    minWidth: 20,
    minHeight: 20,
    borderRadius: 20 / 2,
    position: "absolute",
    left: -11,
    zIndex: 1,
    top: -2
  },
  selectorEnabled: {
    left: -( 11 + 2 )
  },
  selectorDisabled: {
    left: - ( 64 - 11 - 6 )
  }
}

export const types = {
  selector: {
    primary: {
      backgroundColor: colors.primary[200]
    },
    secondary: {
      backgroundColor: colors.secondary[200]
    },
    success: {
      backgroundColor: colors.success[200]
    },
    danger: {
      backgroundColor: colors.danger[200]
    },
    warning: {
      backgroundColor: colors.warning[200]
    },
    info: {
      backgroundColor: colors.info[200]
    },
    light: {
      backgroundColor: colors.light[200]
    },
    dark:{
      backgroundColor: colors.dark[200]
    }
  },
  enabledText: {
    primary: {
      color: colors.primary[200]
    },
    secondary: {
      color: colors.secondary[200]
    },
    success: {
      color: colors.success[200]
    },
    danger: {
      color: colors.danger[200]
    },
    warning: {
      color: colors.warning[200]
    },
    info: {
      color: colors.info[200]
    },
    light: {
      color: colors.light[200]
    },
    dark:{
      color: colors.dark[200]
    }
  }
};

