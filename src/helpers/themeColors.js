export const themeColors = [
  {value: "orange", label: "Orange", hex: "#f4c550"},
  {value: "green", label: "Green", hex: "#9fbaae"},
  {value: "blue", label: "Blue", hex: "#9fb7ce"},
  {value: "pink", label: "Pink", hex: "#e0a39a"},
  {value: "coral", label: "Coral", hex: "#f0aa8d"},
];

export const dot = (color = "transparent") => ({
  alignItems: "center",
  display: "flex",

  ":before": {
    backgroundColor: color,
    borderRadius: 10,
    content: '" "',
    display: "block",
    marginRight: 2,
    height: 10,
    width: 10,
  },
});
