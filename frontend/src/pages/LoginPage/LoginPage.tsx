import useLoginPageStyles from './LoginPage.style'
import {ReactChild, FC, useState, useRef} from 'react'
import {Alert, Box, Button, Collapse, IconButton, TextField} from '@mui/material'
import Page from "@/components/Page/Page";
import SendIcon from '@mui/icons-material/Send';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CloseIcon from '@mui/icons-material/Close';
import User from "@/api/user/user";

const {log} = console

interface LoginPageProps {

    children?: ReactChild,

}


const user = new User()

const LoginPage: FC<LoginPageProps> = ({children}) => {

    const Styles = useLoginPageStyles()


    const [userAction, setLoginAction] = useState('sendCode');
    const [alertMessage, setAlertMessage] = useState<string>('');
    const [username, setUsername] = useState<string>('')
    const inputRef = useRef<HTMLInputElement>(null)

    function handleChange(event: any) {
        //setUsername(event.target.value)

    }

    async function handleClick(event: any) {
        event.preventDefault()
        const value = inputRef.current?.querySelector('input')?.value
        setUsername(String(value))
        if (userAction === 'sendCode') {

            const result = await user.sendCode(String(value))

            if (result.type) {
                setAlertMessage(result.message)
            } else {
                setLoginAction('user')
            }

        } else {
            await user.login(username, Number(value))
            setLoginAction('sendCode')
        }


    }

    return (
        <Page>

            <Box component={Styles} className="LoginPage">

                <Box
                    component={"form"}
                    className='user-page__user-form user-form'
                    noValidate
                    autoComplete="off"
                >
                    <Collapse in={alertMessage !== ''}>
                        <Alert
                            severity="error"
                            action={
                                <IconButton
                                    aria-label="close"
                                    color="inherit"
                                    size="small"
                                    onClick={() => {
                                        setAlertMessage('');
                                    }}
                                >
                                    <CloseIcon fontSize="inherit"/>
                                </IconButton>
                            }
                            sx={{mb: 2}}
                        >
                            {alertMessage}
                        </Alert>
                    </Collapse>

                    <TextField
                        label={
                            userAction === 'sendCode'
                                ? "VK ID"
                                : 'Код из сообщения'
                        }
                        ref={inputRef}
                    />
                    <Button
                        variant={'contained'}
                        onClick={handleClick}
                        endIcon={
                            userAction === 'sendCode'
                                ? <SendIcon/>
                                : <ArrowForwardIosIcon/>
                        }

                    >{
                        userAction === 'sendCode'
                            ? 'Отправить код'
                            : 'Войти'
                    }</Button>

                </Box>

            </Box>

        </Page>
    )
}
export default LoginPage