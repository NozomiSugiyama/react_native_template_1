import { colors } from "config";

export const commons = {
  host: {
    marginBottom: 16,
    borderRadius: 4,
    minHeight: 24,
    minWidth: 64,
    maxHeight: 24,
    maxWidth: 64,
    overflow: "hidden",
    flex: 1,
    flexDirection: "row",
    flexWrap: "nowrap"
  },
  text: {},
  disabledView: {
    backgroundColor: "#dfe2e7"
  },
  selector: {
    width: 24,
    height: 24,
    backgroundColor: "green"
  }
}

export const types = {
  view: {
    primary: {
      backgroundColor: colors.primary.deep,
      borderColor: colors.primary.border,
    },
    secondary: {
      backgroundColor: colors.secondary.deep,
      borderColor: colors.secondary.border,
    },
    success: {
      backgroundColor: colors.success.deep,
      borderColor: colors.success.border,
    },
    danger: {
      backgroundColor: colors.danger.deep,
      borderColor: colors.danger.border,
    },
    warning: {
      backgroundColor: colors.warning.deep,
      borderColor: colors.warning.border,
    },
    info: {
      backgroundColor: colors.info.deep,
      borderColor: colors.info.border,
    },
    light: {
      backgroundColor: colors.light.deep,
      borderColor: colors.light.border,
    },
    dark:{
      backgroundColor: colors.dark.deep,
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

