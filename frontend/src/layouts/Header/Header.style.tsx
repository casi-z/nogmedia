import {

    Box,

    useTheme

} from "@mui/material"
import styled from "styled-components";
import { sitePadding } from '../../theme/GlobalStyle'
import CoolGuys from '@/img/cool-guys.jpg'

function useHeaderStyles() {

    const theme = useTheme()

    return styled.header`
      
      position: relative;
      top: 0;
      left: 0;
      padding: ${sitePadding};
      width: 100%;
      
      display: flex;
      z-index: 2;
      align-items: center;
      flex-direction: column;
      
      
      color: ${theme.palette.text.primary};
      text-transform: capitalize;
      
        .header__top{
            display: flex;
            width: 100%;
            justify-content: space-between;
            align-items: center;
            flex-direction: column;
            ${theme.breakpoints.down('sm')}{
                flex-direction: row;
                justify-content: space-around;
            }
            
        }
      
      .header__background{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 50vh;
        background: ${theme.palette.secondary.light};
        z-index: -1;

        

        .header__circle{
          width: 160vw;
          height: 45vw;
          bottom: -34vw;
          border-radius: 100%;
          left: 50%;
          transform: translateX(-50%);
          background: ${theme.palette.secondary.main};
          position: absolute;
          z-index: -99;
        }
      }

      /* &::before{

        animation: backgroundMove 8s linear infinite;
        content: '';
        width:100%;
        height: 150%;
        background: url(${CoolGuys});
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
        transition-duration: 1s;
        opacity: 0;
        
        @keyframes backgroundMove{
          0%{
            transform: translateY(0%)
          }
          50%{
            transform: translateY(-40%)
          }
          100%{
            transform: translateY(0%)
          }
        }

      }
      &:hover{
        &::before{
          opacity: 1;
        }
      }
      
      ${theme.breakpoints.down('sm')}{
        padding: 0;
        flex-wrap: nowrap;

        .header__title{
          width: 100%;
          display: flex;
          z-index:1;
          justify-content: center;
          text-transform: none;
        }

      }
    } */
  `
}

export default useHeaderStyles