import useSearchPageStyles from './SearchPage.style'
import { ReactChild, FC, useEffect, useContext } from 'react'
import { Box } from '@mui/material'
import SecondaryNewsSection from '@/layouts/SecondaryNewsSection/SecondaryNewsSection'
import Page from '@/components/Page/Page'
import CategorySection from '@/layouts/CategorySection/CategorySection'
import URLutil from '@/utils/URLutil'
import { GlobalContext } from '@/context'

const { log } = console

interface SearchPageProps {

    children?: ReactChild,

}

const SearchPage: FC<SearchPageProps> = ({ children }) => {

    const Styles = useSearchPageStyles()

    const categoryID = Number(URLutil.search('category_id'))
    const {setBreadcrumbs} = useContext(GlobalContext)


    useEffect(() => {
        if (categoryID) {
            setBreadcrumbs(['Категория'])
        }
        
    }, [])

    return (
        <Box component={Styles} className="SearchPage">
            <Page>
                <Box className='search-page__left-container'>
                    <SecondaryNewsSection categoryID={categoryID}/>
                    <CategorySection />
                </Box>
            </Page>

        </Box>
    )
}
export default SearchPage