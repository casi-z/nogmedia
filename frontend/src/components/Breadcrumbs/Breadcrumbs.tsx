import useBreadcrumbsStyles from './Breadcrumbs.style'
import {ReactChild, FC, useEffect, useContext} from 'react'
import { Breadcrumbs as MUIBreadcrumbs, Box, Link, Typography } from '@mui/material'
import {GlobalContext} from "@/context";

const { log } = console

interface BreadcrumbsProps {

    children?: ReactChild,

}

const Breadcrumbs: FC<BreadcrumbsProps> = ({ children }) => {
    const Styles = useBreadcrumbsStyles()

    const {breadcrumbs} = useContext(GlobalContext)

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


            {breadcrumbs?.map((text, index) => (
                <Typography
                    key={index}
                    className='breadcrumbs__page-name'
                    color="text.secondary"

                >

                    {text}

                </Typography>
            ))}


        </MUIBreadcrumbs>
    )
}
export default Breadcrumbs