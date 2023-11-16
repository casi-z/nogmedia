import {
    Box,
    useTheme

} from "@mui/material"
import styled from 'styled-components'

function useArticlePageStyles() {

    const theme = useTheme()


    return (
        styled.div`
            .header__background{
                background: linear-gradient(215deg, #0D0939 31.67%, #080435 45.37%, #130F3D 81.82%, #0D0939 142.23%)!important;
            }
            .article-page__left-container{
                display: flex;
                ${theme.breakpoints.down('md')}{
                    flex-direction: column;
                }
                .Categories{
                    margin-top: 0;
                }
            }
            .article-page__content{
                width: 70%;
                ${theme.breakpoints.down('md')}{
                    width: 100%;
                }
                img{
                    width: 100%;
                    height: 50vh;
                    border-radius: 7px;
                    object-fit: cover;
                }
                .article-page__tags{
                    display: flex;
                    flex-grow: 0;
                }
            }
            .Footer {
                background: linear-gradient(220deg, #0D0939 24.35%, #080435 39.52%, #130F3D 79.88%, #0D0939 146.76%)!important;

            }
       `
    )
}
export default useArticlePageStyles