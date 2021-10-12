import React, { useState } from 'react'
import { MenuStyle } from './style'
import 'antd/dist/antd.css'
import { Menu } from 'antd'
import logo from '../../../public/logo.png'
import { useSessionContext } from '../../context/SessionContext'
import { useHistory } from 'react-router'
import { roleBasedRoutes } from '../../models/session'

export const MenuCustom = () => {
    const [current, setCurrent] = useState('/dashboard')
    const history = useHistory()
    const [session, setSession] = useSessionContext()

    const handleClick = (e) => {
        setCurrent(e.key)
        setSession({ ...session, isAuthenticated: true })
        history.push(e.key)
    }

    return (
        <MenuStyle className="menu">
            <h1 className="title">
                <img className="img" src={logo} />
            </h1>
            <section className="menu-toggle">
                <article className="menu-wrapper">
                    <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
                        {roleBasedRoutes[session.role].routes.map((route) => {
                            return (
                                <Menu.Item key={route.path} icon={route.icon}>
                                    {route.name}
                                </Menu.Item>
                            )
                        })}
                    </Menu>
                </article>
            </section>
        </MenuStyle>
    )
}
