// pages/users/register.js
import React, { useState } from 'react';
import fire from '../../fire-config';
import { useRouter } from 'next/router';
import {
    EmailInput, FormCont,
    FormSubmit,
    InputCont,
    InputDiv,
    NewsletterForm,
    PasswordInput
} from "../../components/Footer/footer.styled";
import {FlexBreak} from "../../containers/layouts/layouts.styled";
const Register = () => {
    const router = useRouter();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passConf, setPassConf] = useState('');
    const [notification, setNotification] = useState('');
    const handleLogin = (e) => {
        e.preventDefault();
        if (password !== passConf) {
            setNotification(
                'Password and password confirmation does not   match'
            )
            setTimeout(() => {
                setNotification('')
            }, 2000)
            setPassword('');
            setPassConf('');
            return null;
        }
        fire.auth()
            .createUserWithEmailAndPassword(username, password)
            .catch((err) => {
                console.log(err.code, err.message)
            });
        router.push("/")
    }
    return (
        <section>
            <h1>Register</h1>
            {notification}
            <FlexBreak/>
            <FormCont>
                <NewsletterForm>
                    <h3>Create a new Muse Profile.</h3>
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
                        </InputCont>
                        <FlexBreak/>
                        <InputCont>
                            <PasswordInput value={passConf}
                                           size="25" placeholder="Confirm your password"
                                           onChange={({target}) => setPassConf(target.value)}/>
                            <FormSubmit type="submit" className="formEmailButton" name="submit" value="Register"/>
                        </InputCont>
                    </InputDiv>
                </NewsletterForm>
            </FormCont>
        </section>
    )
}
export default Register