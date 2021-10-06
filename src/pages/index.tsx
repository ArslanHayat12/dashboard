import React from 'react'
import { Col, Row } from 'antd'
import { MenuCustom } from '../components/Menu/Menu'
import Dashboard from './Dashboard'
function Main() {
    return (
        <>
            <MenuCustom />
            <Dashboard />
        </>
    )
}

export default Main
