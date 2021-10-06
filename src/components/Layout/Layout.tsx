import React from 'react'
import { LayoutStyle } from './style'
function Layout(props) {
    return <LayoutStyle className="container" type={props.type}>{props.children}</LayoutStyle>
}

export default Layout
