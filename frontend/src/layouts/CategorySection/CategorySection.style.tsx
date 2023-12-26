import {
    Box,
    useTheme

} from "@mui/material"
import styled from 'styled-components'

function useCategorySectionStyles() {

    const theme = useTheme()


    return (
        styled.div`
          max-width: 30%;
          margin-left: 1vw;
          position: sticky;

          ${theme.breakpoints.down('md')} {
            width: 100%;
            max-width: 100%;
            margin-left: 0;

            .category-section__tablet-version-container {
              margin-top: 1vw;
              display: flex;
              gap: 1vw;

            }
        }
        `
    )
}

export default useCategorySectionStyles