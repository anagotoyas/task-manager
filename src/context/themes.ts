export interface Theme {
  name: string;
  colorWhite: string;
  colorBg: string;
  colorBgSidebar: string;
  colorRedPrimary: string;
  colorRedSecondary: string;
  colorGray: string;
  colorGraySecondary: string;
  colorGreenPrimary: string;
  colorYellowPrimary: string;
  colorGreenSecondary: string;
  colorYellowSecondary: string;
  colorBluePrimary: string;
  colorBlueSecondary: string;
  colorPinkPrimary: string;
  colorPinkSecondary: string;
  colorPurplePrimary: string;
  colorPurpleSecondary: string;
  fontSizeSm: string;
  fontSizeMd: string;
  widthSidebar:string;
  gradientColorSidebar: string;
  widthCard:string;
}

export const themes: Theme[] = [
  {
    name: "default",
    colorWhite: "#FFFFFF",
    colorBg: "#222528",
    colorBgSidebar: "#2C2F33",
    colorRedPrimary: "#DA584B",
    colorRedSecondary:"#DA584B1A",
    colorGray: "#94979A",
    colorGraySecondary: "#94979A1A",
    colorGreenPrimary: "#70B252",
    colorYellowPrimary: "#E5B454",
    colorGreenSecondary: "#70B2521A",
    colorYellowSecondary: "#E5B4541A",
    colorBluePrimary: "#59BAE3",
    colorBlueSecondary: "#59BAE31A",
    colorPinkPrimary: "#E548E8",
    colorPinkSecondary: "#E548E81A",
    colorPurplePrimary: "#8E5AFD",
    colorPurpleSecondary: "#B998FF1A",
    fontSizeSm: "15px",
    fontSizeMd: "18px",
    widthSidebar:"232px",
    gradientColorSidebar: "linear-gradient(90deg, rgba(186, 37, 37, 0.00) 0%, rgba(210, 77, 77, 0.10) 100%)",
    widthCard:"348px",


  },
];
