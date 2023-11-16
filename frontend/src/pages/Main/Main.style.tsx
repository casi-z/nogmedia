import {
    Box,
    useTheme

} from "@mui/material"
import styled from 'styled-components'

function useMainStyles() {

    const theme = useTheme()


   return (
       styled.div`
         .main__left-container{
           display: flex;
           ${theme.breakpoints.down('md')}{
             flex-direction: column;
           }
         }
       `
   )
}
export default useMainStyles