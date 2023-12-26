import {
    Box,
    useTheme

} from "@mui/material"
import styled from 'styled-components'

function useSearchPageStyles() {

    const theme = useTheme()


    return (
        styled.div`
          .search-page__left-container {
            display: flex;
            ${theme.breakpoints.down('sm')}{
                flex-direction: column;
            }
          
        `
    )
}
export default useSearchPageStyles