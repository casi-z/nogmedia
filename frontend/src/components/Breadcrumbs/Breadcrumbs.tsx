import useBreadcrumbsStyles from './Breadcrumbs.style'
import { ReactChild, FC, useEffect } from 'react'
import { Breadcrumbs as MUIBreadcrumbs, Box, Link, Typography } from '@mui/material'

const { log } = console

interface BreadcrumbsProps {

    children?: ReactChild,

}

const Breadcrumbs: FC<BreadcrumbsProps> = ({ children }) => {
    const Styles = useBreadcrumbsStyles()

    useEffect(() => {
        log(window.location.hash)
    }, [])

    return (
        <MUIBreadcrumbs component={Styles} separator="›" aria-label="breadcrumb">

            <Link
                className='breadcrumbs__link'
                underline={'always'}
                color="inherit"
                href="/">
                Главная
            </Link>


            <Typography
                className='breadcrumbs__page-name'
                color="text.secondary"
            >

                Новости

            </Typography>
            <Typography>
                {/* {window.location.hash.slice(1, -1)} */}
            </Typography>

        </MUIBreadcrumbs>
    )
}
export default Breadcrumbs