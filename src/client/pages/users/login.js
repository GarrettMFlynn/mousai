// pages/users/login.js
import React, { useState } from 'react';
import fire from '../../fire-config';
import { useRouter } from 'next/router'
import {FlexBreak} from "../../containers/layouts/layouts.styled";
import {
    FormCont,
    NewsletterForm,
    InputDiv,
    InputCont,
    EmailInput,
    PasswordInput,
    FormSubmit
} from "../../components/Footer/footer.styled";
const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [notify, setNotification] = useState('');
    const router = useRouter();
    const handleLogin = (e) => {
        e.preventDefault();
        fire.auth()
            .signInWithEmailAndPassword(username, password)
            .catch((err) => {
                console.log(err.code, err.message)
                setNotification(err.message)
                setTimeout(() => {
                    setNotification('')
                }, 2000)
            })
        setUsername('')
        setPassword('')
        router.push("/")
    }
    return (
        <section>
            <h1>Login</h1>
            <FlexBreak/>
            {notify}
            <FormCont>
            <NewsletterForm>
                <h3>Log in to your Muse Profile.</h3>
                <FlexBreak/>
                <InputDiv onSubmit={handleLogin}>
                    <InputCont>
                        <EmailInput type="text" value={username} autoCapitalize="off" autoCorrect="off"
                                    size="25" placeholder="Enter your email address"
                                    onChange= {({target}) => setUsername(target.value)}/>
                    </InputCont>
                    <FlexBreak/>
                    <InputCont>
                        <PasswordInput value={password}
                                    size="25" placeholder="Enter your password"
                                    onChange={({target}) => setPassword(target.value)}/>
                        <FormSubmit type="submit" className="formEmailButton" name="submit" value="Login"/>
                    </InputCont>
                </InputDiv>
            </NewsletterForm>
            </FormCont>
        </section>
    )
}
export default Login