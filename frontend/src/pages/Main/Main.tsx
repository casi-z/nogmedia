import useMainStyles from './Main.style'
import { ReactChild, FC } from 'react'
import { Box } from '@mui/material'
import MainScreen from '@/layouts/MainScreen/MainScreen'
import Page from '@/components/Page/Page'
import PrimaryNewsSection from '@/layouts/PrimaryNewsSection/PrimaryNewsSection'
import SecondaryNewsSection from '@/layouts/SecondaryNewsSection/SecondaryNewsSection'
import CategorySection from '@/layouts/CategorySection/CategorySection'

const { log } = console

interface MainProps {

    children?: ReactChild,

}

const Main: FC<MainProps> = ({ children }) => {
    const Styles = useMainStyles()

    return (
        <Page>
            <Box className='Main main' component={Styles}>
                <MainScreen />
                <PrimaryNewsSection />

                <Box className='main__left-container'>
                    <SecondaryNewsSection />
                    <CategorySection />
                </Box>
            </Box>


        </Page>
    )
}
export default Main