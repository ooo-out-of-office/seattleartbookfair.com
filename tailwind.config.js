module.exports = {
  prefix: "",
  important: false,
  separator: ":",
  theme: {
    screens: {
      md: "768px",
      lg: "1024px"
    },
    colors: {
      transparent: "transparent",
      black: "#000",
      white: "#fff",
      blue: "#b4dfe9",
      yellow: "#fbef87",
      pink: "#f3c1da",
      green: "#a4cfb3"
    },
    backgroundColor: theme => theme("colors"),
    backgroundPosition: {
      bottom: "bottom",
      center: "center",
      left: "left",
      "left-bottom": "left bottom",
      "left-top": "left top",
      right: "right",
      "right-bottom": "right bottom",
      "right-top": "right top",
      top: "top"
    },
    backgroundSize: {
      auto: "auto",
      cover: "cover",
      contain: "contain"
    },
    borderColor: theme => ({
      ...theme("colors"),
      default: "currentColor"
    }),
    borderRadius: {
      none: "0"
    },
    borderWidth: theme => ({
      ...theme("spacing"),
      default: "1px"
    }),
    boxShadow: {
      xs: "0 0 0 1px rgba(0, 0, 0, 0.05)",
      sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
      default:
        "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
      none: "none"
    },
    container: {},
    cursor: {},
    fill: {
      current: "currentColor"
    },
    flex: {
      "1": "1 1 0%",
      auto: "1 1 auto",
      initial: "0 1 auto",
      none: "none"
    },
    flexGrow: {
      "0": "0",
      default: "1"
    },
    flexShrink: {
      "0": "0",
      default: "1"
    },
    fontFamily: {
      sans: [
        "Chivo",
        "system-ui",
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        '"Noto Sans"',
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"'
      ],
      serif: [
        "Unna",
        "Georgia",
        "Cambria",
        '"Times New Roman"',
        "Times",
        "serif"
      ],
      mono: [
        "Menlo",
        "Monaco",
        "Consolas",
        '"Liberation Mono"',
        '"Courier New"',
        "monospace"
      ]
    },
    fontSize: {
      base: "16px",
      md: "22px",
      lg: "32px"
    },
    fontWeight: {
      normal: "400",
      bold: "700"
    },
    height: theme => ({
      auto: "auto",
      full: "100%",
      screen: "100vh"
    }),
    inset: theme => ({
      ...theme("spacing"),
      "0": "0",
      auto: "auto"
    }),
    lineHeight: {
      normal: "calc(1em + 8px)"
    },
    margin: theme => ({
      ...theme("spacing"),
      auto: "auto"
    }),
    maxHeight: {
      full: "100%",
      screen: "100vh"
    },
    maxWidth: (theme, { breakpoints }) => ({
      none: "none",
      full: "100%",
      ...breakpoints(theme("screens"))
    }),
    minHeight: {
      "0": "0",
      full: "100%",
      screen: "100vh"
    },
    minWidth: {
      "0": "0",
      full: "100%"
    },
    order: {
      first: "-9999",
      last: "9999",
      none: "0",
      "1": "1",
      "2": "2",
      "3": "3",
      "4": "4",
      "5": "5",
      "6": "6",
      "7": "7",
      "8": "8",
      "9": "9",
      "10": "10",
      "11": "11",
      "12": "12"
    },
    padding: theme => theme("spacing"),
    placeholderColor: {},
    spacing: {
      1: "1px",
      sm: "10px",
      lg: "20px",
      grid: "40px"
    },
    stroke: {
      current: "currentColor"
    },
    strokeWidth: {
      "0": "0",
      "1": "1",
      "2": "2"
    },
    textColor: theme => theme("colors"),
    width: theme => ({
      auto: "auto",
      full: "100%",
      screen: "100vw"
    }),
    zIndex: {},
    gap: theme => ({
      ...theme("spacing")
    }),
    gridTemplateColumns: {
      none: "none",
      "1": "repeat(1, minmax(0, 1fr))",
      "2": "repeat(2, minmax(0, 1fr))",
      "3": "repeat(3, minmax(0, 1fr))",
      "4": "repeat(4, minmax(0, 1fr))",
      "5": "repeat(5, minmax(0, 1fr))",
      "6": "repeat(6, minmax(0, 1fr))",
      "7": "repeat(7, minmax(0, 1fr))",
      "8": "repeat(8, minmax(0, 1fr))"
    },
    gridColumn: {
      auto: "auto",
      "span-1": "span 1 / span 1",
      "span-2": "span 2 / span 2",
      "span-3": "span 3 / span 3",
      "span-4": "span 4 / span 4",
      "span-5": "span 5 / span 5",
      "span-6": "span 6 / span 6",
      "span-7": "span 7 / span 7",
      "span-8": "span 8 / span 8"
    },
    gridColumnStart: {
      auto: "auto",
      "1": "1",
      "2": "2",
      "3": "3",
      "4": "4",
      "5": "5",
      "6": "6",
      "7": "7",
      "8": "8"
    },
    gridColumnEnd: {
      auto: "auto",
      "1": "1",
      "2": "2",
      "3": "3",
      "4": "4",
      "5": "5",
      "6": "6",
      "7": "7",
      "8": "8"
    },
    gridTemplateRows: {
      none: "none",
      "1": "repeat(1, minmax(0, 1fr))",
      "2": "repeat(2, minmax(0, 1fr))",
      "3": "repeat(3, minmax(0, 1fr))",
      "4": "repeat(4, minmax(0, 1fr))",
      "5": "repeat(5, minmax(0, 1fr))",
      "6": "repeat(6, minmax(0, 1fr))"
    },
    gridRow: {
      auto: "auto",
      "span-1": "span 1 / span 1",
      "span-2": "span 2 / span 2",
      "span-3": "span 3 / span 3",
      "span-4": "span 4 / span 4",
      "span-5": "span 5 / span 5",
      "span-6": "span 6 / span 6"
    },
    gridRowStart: {
      auto: "auto",
      "1": "1",
      "2": "2",
      "3": "3",
      "4": "4",
      "5": "5",
      "6": "6",
      "7": "7"
    },
    gridRowEnd: {
      auto: "auto",
      "1": "1",
      "2": "2",
      "3": "3",
      "4": "4",
      "5": "5",
      "6": "6",
      "7": "7"
    },
    transformOrigin: {},
    scale: {},
    rotate: {
      "-180": "-180deg",
      "-90": "-90deg",
      "-45": "-45deg",
      "0": "0",
      "45": "45deg",
      "90": "90deg",
      "180": "180deg"
    },
    translate: (theme, { negative }) => ({
      "-full": "-100%",
      "-1/2": "-50%",
      "1/2": "50%",
      full: "100%"
    }),
    skew: {},
    transitionProperty: {},
    transitionTimingFunction: {},
    transitionDuration: {}
  },
  variants: {
    accessibility: ["focus"],
    alignContent: ["responsive"],
    alignItems: ["responsive"],
    alignSelf: ["responsive"],
    appearance: [],
    backgroundAttachment: [],
    backgroundColor: ["responsive", "hover", "focus"],
    backgroundPosition: ["responsive"],
    backgroundRepeat: ["responsive"],
    backgroundSize: ["responsive"],
    borderCollapse: [],
    borderColor: ["hover", "focus"],
    borderRadius: [],
    borderStyle: [],
    borderWidth: ["responsive"],
    boxShadow: ["hover", "focus"],
    boxSizing: [],
    cursor: [],
    display: ["responsive"],
    fill: ["responsive"],
    flex: ["responsive"],
    flexDirection: ["responsive"],
    flexGrow: ["responsive"],
    flexShrink: ["responsive"],
    flexWrap: ["responsive"],
    float: [],
    clear: [],
    fontFamily: [],
    fontSize: ["responsive"],
    fontSmoothing: [],
    fontStyle: [],
    fontWeight: ["hover", "focus"],
    height: [],
    inset: ["responsive"],
    justifyContent: ["responsive"],
    letterSpacing: [],
    lineHeight: [],
    listStylePosition: ["responsive"],
    listStyleType: [],
    margin: ["responsive"],
    maxHeight: ["responsive"],
    maxWidth: ["responsive"],
    minHeight: ["responsive"],
    minWidth: ["responsive"],
    objectFit: [],
    objectPosition: [],
    opacity: ["hover", "focus"],
    order: ["responsive"],
    outline: ["focus"],
    overflow: [],
    padding: [],
    placeholderColor: ["focus"],
    pointerEvents: [],
    position: [],
    resize: [],
    stroke: [],
    strokeWidth: [],
    tableLayout: [],
    textAlign: [],
    textColor: ["hover", "focus"],
    textDecoration: ["hover", "focus"],
    textTransform: [],
    userSelect: [],
    verticalAlign: [],
    visibility: ["responsive"],
    whitespace: [],
    width: ["responsive"],
    wordBreak: [],
    zIndex: [],
    gap: ["responsive"],
    gridAutoFlow: ["responsive"],
    gridTemplateColumns: ["responsive"],
    gridColumn: ["responsive"],
    gridColumnStart: ["responsive"],
    gridColumnEnd: ["responsive"],
    gridTemplateRows: ["responsive"],
    gridRow: ["responsive"],
    gridRowStart: ["responsive"],
    gridRowEnd: ["responsive"],
    transform: [],
    transformOrigin: [],
    scale: [],
    rotate: [],
    translate: [],
    skew: [],
    transitionProperty: [],
    transitionTimingFunction: [],
    transitionDuration: []
  },
  corePlugins: {},
  plugins: []
};
