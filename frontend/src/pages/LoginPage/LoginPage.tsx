import useLoginPageStyles from './LoginPage.style'
import {ReactChild, FC, useState, useRef, useEffect, useContext} from 'react'
import {Alert, Box, Button, Collapse, IconButton, TextField} from '@mui/material'
import Page from "@/components/Page/Page";
import SendIcon from '@mui/icons-material/Send';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CloseIcon from '@mui/icons-material/Close';
import User from "@/api/user/user";
import {GlobalContext} from "@/context";
import {redirect} from "react-router-dom";

const {log} = console

interface LoginPageProps {

    children?: ReactChild,

}


const user = new User()

const LoginPage: FC<LoginPageProps> = ({children}) => {

    const context = useContext(GlobalContext)

    const Styles = useLoginPageStyles()


    const [inputAction, setInputAction] = useState('sendCode');
    const [alertMessage, setAlertMessage] = useState<string>('');
    const [username, setUsername] = useState<string>('')
    const [isResendButtonEnable, setIsResendButtonEnable] = useState<boolean>(false)
    const [resendButtonTimeOut, setResendButtonTimeOut] = useState<string>('')

    const inputRef = useRef<HTMLInputElement>(null)


    function countDownTimer(minutes: number, seconds: number) {
        let valMin = minutes
        let valSec = seconds
        setInterval(() => {
            if (valSec === 0 && valMin === 0) return 'end'
            if (valSec === 0) valMin--
            valSec = 60
            valSec--
            setResendButtonTimeOut(() => `${valMin}:${valSec}`)
        }, 1000)
    }

    useEffect(() => {

        setTimeout(() => setIsResendButtonEnable(true), 15 * 1000)
        countDownTimer(15, 0)

    }, [])

    async function handleClick(event: any) {

        event.preventDefault()

        const value = inputRef.current?.querySelector('input')?.value



        if (inputAction === 'sendCode') {

            setUsername(String(value))
            const result = await user.sendCode(String(value))

            if (result.error) {
                setAlertMessage(result.message)
            } else {
                setInputAction('login')
            }
            log(result)
        } else {

            const result = await user.login(username, value)
            log(result)

            if(result.user){
                context.setIsAuth(true)
                context.setUserData(result.user)
            }else{
                return setAlertMessage('Неверный код')
            }

            setInputAction('sendCode')
            alert('ты вошёл')
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
                    <Collapse in={true}>
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
                            inputAction === 'sendCode'
                                ? "VK ID"
                                : 'Код из сообщения'
                        }
                        ref={inputRef}
                    />

                    <Button
                        variant={'contained'}
                        onClick={handleClick}
                        endIcon={
                            inputAction === 'sendCode'
                                ? <SendIcon/>
                                : <ArrowForwardIosIcon/>
                        }

                    >{
                        inputAction === 'sendCode'
                            ? 'Отправить код'
                            : 'Войти'
                    }</Button>

                    <Button disabled={!isResendButtonEnable} variant={'text'}>
                        отправить код ещё раз {resendButtonTimeOut}
                    </Button>

                </Box>

            </Box>

        </Page>
    )
}
export default LoginPage