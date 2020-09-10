import React from "react";
import {
    EmailInput,
    FormCont,
    FormSubmit,
    InputDiv,
    NewsletterForm
} from "../components/Footer/footer.styled";
import {FlexBreak} from "../containers/layouts/layouts.styled";
import {keys} from "../keys";

export default function Newsletter () {
    return (
        <section>
            <FormCont/>
            <NewsletterForm>
                <h3>Sign up for our newsletter.</h3>
                <FlexBreak/>
                <InputDiv action={keys.mailchimp_url} method="POST">
                    <input type="hidden" name="u" value={keys.mailchimp_hidden1}/>
                    <input type="hidden" name="id" value={keys.mailchimp_hidden2}/>
                    <EmailInput type="email" autoCapitalize="off" autoCorrect="off" name="MERGE0" id="MERGE0"
                                size="25" placeholder="Enter your email address"/>
                    <FormSubmit type="submit" className="formEmailButton" name="submit" value="Subscribe"/>
                </InputDiv>
            </NewsletterForm>
            <FormCont/>
        </section>
    )
}