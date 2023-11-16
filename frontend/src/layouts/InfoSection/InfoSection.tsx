import useInfoSectionStyles from './InfoSection.style'
import {ReactChild, FC} from 'react'
import {Box, useTheme} from '@mui/material'
import Mountains from '@/img/mountains.png'
import secondaryHeader from "@/components/SecondaryHeader/SecondaryHeader";
import SecondaryHeader from "@/components/SecondaryHeader/SecondaryHeader";
import PrimaryHeader from "@/components/PrimaryHeader/PrimaryHeader";
import SecondaryButton from "@/components/SecondaryButton/SecondaryButton";
import theme from "@/theme";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
const {log} = console

interface InfoSectionProps {

    children?: ReactChild,

}

const InfoSection: FC<InfoSectionProps> = ({children}) => {

    const Styles = useInfoSectionStyles()
    const theme = useTheme()

    return (
        <>
            <a style={{visibility: 'hidden'}} id={'down'}/>
            <Box component={Styles} className="InfoSection">



                <Box className={'InfoSection__item'}>
                    <img src={Mountains} alt=""/>
                </Box>



                <Box className={'InfoSection__item right'}>

                    <SecondaryHeader outlined={'left'}>
                        EAST nUSA TENGGARA
                    </SecondaryHeader>

                    <PrimaryHeader>
                        Have you <br /> enjoyed your <br />holiday?
                    </PrimaryHeader>
                    You will be amazed if you take part in this sailing Komodo island tour package. So it is also mandatory
                    for you, besides enjoying Komodo tourism on Komodo Island, you also have to taste the marine tourism.
                    The beautiful waters of Komodo will make you meet many travelers from other countries.

                    <br/>

                    <SecondaryButton

                        icon={<ArrowForwardIcon/>}
                        color={theme.palette.text.secondary}

                    >
                        read more
                    </SecondaryButton>

                </Box>

            </Box>
        </>
    )
}
export default InfoSection