import {
    Box,
    useTheme

} from "@mui/material"
import styled from 'styled-components'

function useTagsStyles() {

    const theme = useTheme()


    return (
        styled.section`
            
            background: ${theme.palette.text.secondary};
            padding: 1vh 1vw;
            padding-right: 4vw;
            padding-bottom: 2vw;
            margin-top: 1vw;
            border-radius: 5px;
            .tags__content{
                display: flex;
                flex-wrap: wrap;
                gap: 0.5vw;
            }

            .SecondaryButton{
                
            }
        `
    )
}
export default useTagsStyles