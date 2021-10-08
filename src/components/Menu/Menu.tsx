import React, { useState } from 'react'
import { MenuStyle } from './style'
import 'antd/dist/antd.css'
import { Menu } from 'antd'
import {  AppstoreOutlined } from '@ant-design/icons'
import logo from '../../../public/logo.png'
import { AreaChartOutlined } from '@ant-design/icons'
import { useSessionContext } from '../../context/SessionContext'
import { useHistory } from 'react-router'


export const MenuCustom = () => {
    const [current, setCurrent] = useState('/dashboard')
    const history = useHistory();
    const [session, setSession] = useSessionContext();

    const handleClick = (e) => {
        console.log('click ', e)
        setCurrent(e.key)
        setSession({...session, isAuthenticated: true});
        history.push(e.key);
    }

    return (
        <MenuStyle className="menu">
            <h1 className="title">
                <img className="img" src={logo} />
            </h1>
            <section className="menu-toggle">
                <article className="menu-wrapper">
                    <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
                        <Menu.Item key="/dashboard" icon={<AreaChartOutlined />}>
                            Dashboard
                        </Menu.Item>
                        <Menu.Item key="/about" icon={<AppstoreOutlined />}>
                            About Us
                        </Menu.Item>
                    </Menu>
                </article>
            </section>
        </MenuStyle>
    )
}
