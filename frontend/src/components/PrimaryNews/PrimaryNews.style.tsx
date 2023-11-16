import {
    Box,
    useTheme

} from "@mui/material"
import styled from 'styled-components'

function usePrimaryNewsStyles() {

    const theme = useTheme()


    return (
        styled.a`
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          align-items: flex-start;
          border-radius: 7px;
          min-height: calc(50% - 0.5vw);
          text-transform: none;
          padding: 2vh 1vw;
          color: ${theme.palette.text.secondary};
          
          .primary-news__content {
            width: 57%;
          }
          
          .PrimaryHeader{
            font-family: Montserrat;
            white-space: nowrap;
            font-size: 24px;
            font-style: normal;
            font-weight: 500;
            line-height: 26px;
          }

          .primary-news__data {
            color: #B9B7DC;
            font-family: Rubik;
            display: flex;
            font-size: 14px;
            font-style: normal;
            font-weight: 300;
            line-height: 22px; /* 157.143% */

            span {
              display: flex;
              justify-content: center;
              align-items: center;
              gap: 0.5vw;
              margin-right: 0.5vw;
            }
          }
          
          p {
            color: #B9B7DC;
          }
        `
    )
}

export default usePrimaryNewsStyles