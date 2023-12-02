export interface Theme {
  name: string;
  colorWhite: string;
  colorBg: string;
  colorBgSidebar: string;
  colorRedPrimary: string;
  colorGray: string;
  colorGreenPrimary: string;
  colorYellowPrimary: string;
  colorGreenSecondary: string;
  colorYellowSecondary: string;
  fontSizeSm: string;
  fontSizeMd: string;
  widthSidebar:string;
  gradientColorSidebar: string;
}

export const themes: Theme[] = [
  {
    name: "default",
    colorWhite: "#FFFFFF",
    colorBg: "#222528",
    colorBgSidebar: "#2C2F33",
    colorRedPrimary: "#DA584B",
    colorGray: "#94979A",
    colorGreenPrimary: "#70B252",
    colorYellowPrimary: "#E5B454",
    colorGreenSecondary: "#70B2521A",
    colorYellowSecondary: "#E5B4541A",
    fontSizeSm: "15px",
    fontSizeMd: "18px",
    widthSidebar:"232px",
    gradientColorSidebar: "linear-gradient(90deg, rgba(186, 37, 37, 0.00) 0%, rgba(210, 77, 77, 0.10) 100%)",

  },
];
