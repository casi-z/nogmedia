import {
  Box,
  useTheme

} from "@mui/material"
import styled from 'styled-components'
import PopularNewsSection from "@/components/PopularNewsSection/PopularNewsSection";

function PopularNewsSectionStyles() {

  const theme = useTheme()


  return (
    styled.section`
          margin-top: 1vw;
          display: flex;
          flex-direction: column;
          background: ${theme.palette.text.secondary};
          padding: 1vw;
          padding-bottom: 0;
          border-radius: 5px;

          ${theme.breakpoints.down('md')} {
            width: calc(50% - 0.5vw);
            margin-top: 0;
          }

          
          
          .popular-news__content {
            display: flex;
            flex-direction: column;
            column-gap: 0.5vw;
          }

          .popular-news__news {
            width: 100%;
            display: flex;
            align-items: center;

            ${theme.breakpoints.down('sm')}{
              flex-direction: column;
            }

            img {
              width: 40%;
              height: 100%;
              object-fit: cover;
              border-radius: 7px;
              ${theme.breakpoints.down('sm')}{
                width: 100%;
              }
            }

            .PrimaryHeader {
              color: #000;
              font-family: Montserrat;
              font-size: 18px;
              font-style: normal;
              font-weight: 700;
              line-height: 99.4%; /* 17.892px */
            }

            .Text {
              color: #000;
              font-family: Montserrat;
              font-size: 16px;
              font-style: normal;
              font-weight: 500;
              line-height: 123.4%; /* 19.744px */
              opacity: 0.4;
              text-transform: none;
            }

          }
        `
  )
}

export default PopularNewsSectionStyles