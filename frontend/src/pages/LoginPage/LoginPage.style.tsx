import {
    Box,
    useTheme

} from "@mui/material"
import styled from 'styled-components'

function useLoginPageStyles() {

    const theme = useTheme()


    return (
        styled.div`
          width: 100%;
          height: 50vh;
          
          display: flex;
          justify-content: center;
          align-items: center;
          .login-form{
            display: flex;
            gap: 1vw;
            flex-direction: column;
          }
          
        `
    )
}

export default useLoginPageStyles