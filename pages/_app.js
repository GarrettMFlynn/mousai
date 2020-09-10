import React from 'react';
import ReactDOM from 'react-dom'
import {theme} from "../styles/theme";
import {GlobalStyles} from "../styles/global";
import {ThemeProvider} from "styled-components";
import Main from '../containers/layouts/main'


// Icons
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faBolt, faBrain, faMemory} from '@fortawesome/free-solid-svg-icons'

library.add(fab, faBolt, faBrain, faMemory)

export const siteTitle = 'Mousai Neurotechnologies'

export default function App({ Component, pageProps }) {

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Main>
            <Component {...pageProps} />
            </Main>
        </ThemeProvider>
        )
}
