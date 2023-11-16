import {
    Box,
    useTheme

} from "@mui/material"
import styled from 'styled-components'

function useSecondaryNewsSectionStyles() {

    const theme = useTheme()


    return (
        styled.section`
          //margin-left: 1vw;
          
          width: 70%;
          margin-top: 1vw;
          gap: 1vw;

          display: flex;
          flex-wrap: wrap;

          ${theme.breakpoints.down('md')}{
            width: 100%;
            margin-left: 0;
          }
          ${theme.breakpoints.down('sm')}{

            flex-direction: column;

            .SecondaryNews{
                width: 100%;
            }

          }
          .secondary-news-section__skeleton{
            width: calc(50% - 0.5vw);
            height: 50vh;
            background: #fff;
            border-radius: 7px;
          }

          
        `
    )
}

export default useSecondaryNewsSectionStyles