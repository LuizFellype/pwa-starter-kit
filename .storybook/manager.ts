import { addons } from "@storybook/manager-api"
import { create } from "@storybook/theming/create"

const theme = create({
  base: "light",
  brandTitle: "PWA Starter Kit",
  brandUrl: "/",
  brandTarget: "_self",

  colorPrimary: "#000000",
  colorSecondary: "#666666",

  // UI
  appBg: "#ffffff",
  appContentBg: "#ffffff",
  appBorderColor: "#e5e5e5",
  appBorderRadius: 8,

  // Typography
  fontBase: '"Inter", sans-serif',
  fontCode: "monospace",

  // Text colors
  textColor: "#000000",
  textInverseColor: "#ffffff",

  // Toolbar default and active colors
  barTextColor: "#666666",
  barSelectedColor: "#000000",
  barBg: "#ffffff",

  // Form colors
  inputBg: "#ffffff",
  inputBorder: "#e5e5e5",
  inputTextColor: "#000000",
  inputBorderRadius: 4,
})

addons.setConfig({
  theme,
  panelPosition: "bottom",
  selectedPanel: "controls",
})
