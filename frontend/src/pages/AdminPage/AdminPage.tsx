import useAdminPageStyles from './AdminPage.style'
import { ReactChild, FC } from 'react'
import { Box } from '@mui/material'
import Page from '@/components/Page/Page'
import SecondaryNewsSection from '@/layouts/SecondaryNewsSection/SecondaryNewsSection'

const { log } = console

interface AdminPageProps {
   
  
   
}

const AdminPage: FC<AdminPageProps> = () => {
const Styles = useAdminPageStyles()

    return(
      <Page>
        <Box component={Styles} className="AdminPage">
         <SecondaryNewsSection/>
        </Box>
      </Page>
    )
}
export default AdminPage