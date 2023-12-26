import {
    Box, Grid,
    useTheme

} from "@mui/material"
import styled from 'styled-components'
function useInfoSectionStyles() {

    const theme = useTheme()

    return (
        styled.section`
          width: 100%;
          
          display: flex;
          justify-content: space-between;
          align-items: center;
          max-height: 720px;
          margin-bottom: 20vh;
          .InfoSection__item{
            width: 40%;
            &.right{
              height: 60%;
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              
            }
          }
          .SecondaryButton{
            justify-content: flex-start;
            padding-left: 0;
          }
          
        `
    )
}
export default useInfoSectionStyles