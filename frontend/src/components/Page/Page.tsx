import usePageStyles from './Page.style'
import { ReactChild, ReactNode, FC, useEffect } from 'react'
import Header from '../../layouts/Header/Header'
import Footer from '../../layouts/Footer/Footer'
import Wrapper from "../Wrapper/Wrapper";
import Cursor from "../Cursor/Cursor";
import { Box, useTheme } from '@mui/material';


const { log } = console

interface PageProps {

    children: ReactChild | ReactNode,
    title?: string

}

const Page: FC<PageProps> = ({ children, title }) => {

    useEffect(() => {

        if (title) {
            document.title = title
        }

    }, [])

    const Styles = usePageStyles()

    const theme = useTheme()

 
    return (
        <Box component={Styles} className="Page page">
            
            <Header />

            <Wrapper>
                {children}

            </Wrapper>

            <Footer />

        </Box>
    )
}
export default Page