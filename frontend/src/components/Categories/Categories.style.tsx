import {
    Box,
    useTheme

} from "@mui/material"
import styled from 'styled-components'

function useCategoriesStyles() {

    const theme = useTheme()


    return (
        styled.section`
          margin-top: 1vw;
          border-radius: 5px;
          background: ${theme.palette.text.secondary};
          padding: 1vh 1vw;
          min-height: 20vh;

          ${theme.breakpoints.down('md')} {
            width: calc(50% - 0.5vw);
            margin-top: 0;
          }


          .PrimaryHeader {
            font-family: Montserrat;
            font-size: 25px;
            font-style: normal;
            font-weight: 500;
            line-height: 99.4%;
          }

          .categories__item {
            color: #000;
            font-family: Montserrat;
            font-size: 16px;
            font-style: normal;
            font-weight: 500;
            line-height: 232.4%;
            opacity: 0.4;
            width: 100%;
            text-align: left;
            justify-content: flex-start;
          }
        `
    )
}

export default useCategoriesStyles