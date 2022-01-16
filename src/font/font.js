import { createGlobalStyle } from "styled-components";
import RFLEXBLACK from "./R-FLEX-BLACK.woff2";
import NotoSansKRBold from "./NotoSansKR-Bold.woff2";
import NotoSansKRBlack from "./NotoSansKR-Black.woff2";

export const FontStyle = createGlobalStyle`		    
  @font-face {
    font-family: 'R-FLEX-BLACK';	
    src: url(${RFLEXBLACK}) format('woff2');
    font-weight: 900;
    font-style: normal;
  }
  @font-face {
    font-family: 'Noto-Sans-KR-Bold';
    src: url(${NotoSansKRBold}) format('woff2');
    font-weight: 600;
    font-style: normal;
  }
  @font-face {
    font-family: 'Noto-Sans-KR-Black';
    src: url(${NotoSansKRBlack}) format('woff2');
    font-weight: 900;
    font-style: normal;
  }
`;
