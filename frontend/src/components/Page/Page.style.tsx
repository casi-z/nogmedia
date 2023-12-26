import {
    Box,
    useTheme
} from "@mui/material"

import styled from 'styled-components'

function usePageStyles() {

    const theme = useTheme()

    return styled.div`

      width: 100%;
      min-height: 100vh;
      overflow: visible;


    `
}

export default usePageStyles