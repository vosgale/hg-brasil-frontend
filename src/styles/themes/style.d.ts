import "styled-components";
declare module "styled-components" {
  export interface DefaultTheme {
    title: string;
    colors: {
      background: string;
      primary: string;
      text: string;
      opaqueText: string;
      cardBackground: string;
    };
    breakpoints: {
      tablet: string;
      mobile: string;
      ultraMobile: string;
    };
  }
}
