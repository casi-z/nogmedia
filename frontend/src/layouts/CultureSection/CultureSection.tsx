import useCultureSectionStyles from './CultureSection.style'
import {ReactChild, FC} from 'react'
import {Box, useTheme} from '@mui/material'
import Mountains from "@/img/mountains.png";
import SecondaryHeader from "@/components/SecondaryHeader/SecondaryHeader";
import PrimaryHeader from "@/components/PrimaryHeader/PrimaryHeader";
import SecondaryButton from "@/components/SecondaryButton/SecondaryButton";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const {log} = console

interface CultureSectionProps {

    children?: ReactChild,

}

const CultureSection: FC<CultureSectionProps> = ({children}) => {

const Styles = useCultureSectionStyles()

const theme = useTheme()

    return (
        <Box component={Styles} className="CultureSection">
            <Box className={'InfoSection__item'}>
                <img src={Mountains} alt=""/>
            </Box>


            <Box className={'InfoSection__item right'}>

                <SecondaryHeader outlined={'left'}>
                    INDONESIAN CULTURE
                </SecondaryHeader>

                <PrimaryHeader>
                    Our culture here is very friendly to people
                </PrimaryHeader>
                known for his politeness, manners and gentleness. This becomes a characteristic when they mingle with other tribes and become basic traits that are passed down by their ancestors.

                <br/>

                <SecondaryButton

                    icon={<ArrowForwardIcon/>}
                    color={theme.palette.text.secondary}

                >
                    read more
                </SecondaryButton>

            </Box>

        </Box>

    )
}
export default CultureSection