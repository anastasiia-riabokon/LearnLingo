export const themeColors = [
  {value: "orange", label: "Orange Theme", hex: "#f4c550"},
  {value: "green", label: "Green Theme", hex: "#9fbaae"},
  {value: "blue", label: "Blue Theme", hex: "#9fb7ce"},
  {value: "pink", label: "Pink Theme", hex: "#e0a39a"},
  {value: "coral", label: "Coral Theme", hex: "#f0aa8d"},
];

export const dot = (color = "transparent") => ({
  alignItems: "center",
  display: "flex",

  ":before": {
    backgroundColor: color,
    borderRadius: 10,
    content: '" "',
    display: "block",
    marginRight: 8,
    height: 10,
    width: 10,
  },
});
