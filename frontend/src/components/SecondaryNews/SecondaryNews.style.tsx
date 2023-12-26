import {
    Box,
    useTheme

} from "@mui/material"
import styled from 'styled-components'

function useSecondaryNewsStyles() {

    const theme = useTheme()


    return (
        styled.a`
  
          width: calc(50% - 0.5vw);
          /* height: 40vh; */
          background: #fff;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: flex-start;
          border-radius: 7px;
          overflow: hidden;
          color: ${theme.palette.text.primary};
          padding: 0;
          text-transform: none;
          height:50vh;
          
          img {
            width: 100%;
            height: 50%;
            object-fit: cover;
            background: linear-gradient(0deg, rgba(8, 4, 53, 0.81) 14.85%, rgba(8, 4, 53, 0.00) 61.02%);

          }

          .secondary-news__content {
            padding: 1vh 0.5vw;

            .PrimaryHeader{

              ${theme.breakpoints.down('sm')}{
                font-size: 15px;
              }

            }

          }

          .secondary-news__data {
            font-family: Rubik;
            display: flex;
            font-size: 14px;
            font-style: normal;
            font-weight: 300;
            line-height: 22px; /* 157.143% */

            .secondary-news__icon{
                filter: invert();
            }

            span {
              display: flex;
              justify-content: center;
              align-items: center;
              gap: 0.5vw;
              margin-right: 0.5vw;
            }
          }

          .secondary-news__tags {
            margin-top: 1vh;
            display: flex;
            gap: 0.3vw;
            ${theme.breakpoints.down('sm')}{
              flex-wrap: wrap;
            }
          }

        `
    )
}

export default useSecondaryNewsStyles