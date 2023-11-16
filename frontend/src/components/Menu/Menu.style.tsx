import {
    Box,

    useTheme
} from "@mui/material"

import styled from 'styled-components'

function useMenuStyles() {

    const theme = useTheme()
        
    return styled.nav`
      display: flex;
      justify-content: center;
      width: 100%;

      
    `

}
export default useMenuStyles