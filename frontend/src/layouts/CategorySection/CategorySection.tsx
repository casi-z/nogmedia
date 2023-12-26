import useCategorySectionStyles from './CategorySection.style'
import {ReactChild, FC} from 'react'
import {Box, useTheme} from '@mui/material'
import Categories from '@/components/Categories/Categories'
import Tags from '@/components/Tags/Tags'
import PopularNewsSection from '@/components/PopularNewsSection/PopularNewsSection'


interface CategorySectionProps {

    children?: ReactChild,

}

const CategorySection: FC<CategorySectionProps> = ({children}) => {
    const Styles = useCategorySectionStyles()

    const theme = useTheme()

    const tabletVersion = theme.breakpoints.down('md')

    return (
        <Box component={Styles} className="CategorySection category-section">
            {tabletVersion
                ?
                <>
                    <Box className='category-section__tablet-version-container'>
                        <Categories/>
                        <PopularNewsSection/>
                    </Box>
                    <Tags/>

                </>
                :
                <>
                    <Categories/>
                    <Tags/>
                    <PopularNewsSection/>
                </>

            }
        </Box>
    )
}
export default CategorySection