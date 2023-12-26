import {
    Box,
    useTheme

} from "@mui/material"
import styled from 'styled-components'

function usePrimaryNewsSectionStyles() {

    const theme = useTheme()


    return (
        styled.section`
            display: flex;
            gap: 1vw;
            height: 50vh;
            
          
            .primary-news-section__big-news{
              
                min-height: 100%!important;
                width: calc(70% - 0.5vw);
                ${theme.breakpoints.down('md')}{
                  height: 100%;
                  width: 100%;
                }
                
              
            }
            .primary-news-section__small-news-container{
                display: flex;
                flex-direction: column;
                gap: 1vw;
                width: 30%;

                .PrimaryNews{
                    min-width: 100%;
                    max-height: calc(50% - 0.5vw);
                    .Text{
                        display: none;
                    }
                }
                
            }
            .swiper {
              height: 30vh;
              .primary-news-section__slider-news {
                height: 30vh;
              }
            }
          
       `
    )
}
export default usePrimaryNewsSectionStyles