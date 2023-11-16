import useLoginPageStyles from './LoginPage.style'
import {ReactChild, FC, useState, useRef} from 'react'
import {Box, Button, Input, TextField} from '@mui/material'
import Page from "@/components/Page/Page";
import * as React from "react";
import Login from "@/api/login/login";


const {log} = console

interface LoginPageProps {

    children?: ReactChild,

}


const login = new Login()

const LoginPage: FC<LoginPageProps> = ({children}) => {

    const Styles = useLoginPageStyles()

    let username = ''

    const loginInput = useRef<HTMLInputElement>(null)

    function handleChange(event: any){
        username = event.target.value

    }

    async function handleClick(){
        log(username)
        await login.sendCode('test')

    }

    return (
        <Page>

            <Box component={Styles} className="LoginPage">

                <Box
                    component={"form"}
                    className='login-page__login-form login-form'
                    noValidate
                    autoComplete="off"
                >

                    <TextField
                        id="outlined-controlled"
                        label="Controlled"
                        ref={loginInput}
                        onChange={handleChange}
                    />
                    <Button
                        disabled={username === ''}
                        variant={'contained'}
                        onClick={handleClick}


                    >Вход</Button>

                </Box>

            </Box>

        </Page>
    )
}
export default LoginPage