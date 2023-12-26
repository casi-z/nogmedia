import {
  Box,

  useTheme

} from "@mui/material"
import Background from "@/img/background.png";
import {sitePadding} from "../../theme/GlobalStyle";
import styled from "styled-components";

function useMainScreenStyles() {

  const theme = useTheme()

  return styled.section`
      
    width: 100%;
    //background: url(${Background}) no-repeat;
      
    display: flex;
    justify-content: center;
    align-items: flex-start;
    
    min-height: 50vh;
    margin-bottom: 2%;
    .swiper {
      height: 50vh;
      .main-screen__new-video {
        text-align: center;
        font-size: 18px;

        width: 100%;
        height: 100%;

        display: flex;
        justify-content: flex-end;
        flex-direction: column;
        align-items: center;
        background: ${theme.palette.primary.main};
      }
    }  
    `

}

export default useMainScreenStyles