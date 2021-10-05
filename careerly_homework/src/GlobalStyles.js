import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";

const GlobalStyles = createGlobalStyle`
${reset}
html {
    font-size: 10px;
    font-family: Pretendard, sans-serif;
    background-color: #f7f7f7;
}



`;

export default GlobalStyles;
