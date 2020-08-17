import Link from "next/link";
import {BackToHome, FlexBreak, TeamContainer, TeamDetails, TeamTile} from "../containers/layouts/layouts.styled";
import React from "react";


export default function Contact () {
    return (
        <section>
            <h1>Contact</h1>
            <FlexBreak/>
            <form>
                <label>
                    Name
                    <input type="text" name="name" style={{margin: '25px'}}/>
                </label>
                <FlexBreak/>
                <label>
                    Message
                    <input type="text" name="email" style={{margin: '25px'}}/>
                </label>
                <FlexBreak/>
                <input type="submit" value="Submit" />
            </form>
            <FlexBreak/>
            <BackToHome>
                <Link href="/">
                    <a>← Back to home</a>
                </Link>
            </BackToHome>
        </section>
    )
}