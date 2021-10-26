import React from "react"
import "./layout.css"
import { GlobalStyle } from "../styles/Global"

const Layout = ({children}) =>
    <>
        <GlobalStyle/>
        <main>{children}</main>
    </>

export default Layout