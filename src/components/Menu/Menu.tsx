import React, { useState } from 'react'
import { MenuStyle } from './style'
import 'antd/dist/antd.css'
import { Breadcrumb, Layout, Menu } from 'antd'
import logo from '../../../public/logo.png'
import { useSessionContext } from '../../context/SessionContext'
import { useHistory } from 'react-router'
import { roleBasedRoutes } from '../../models/session'
const { Header, Content, Footer, Sider } = Layout
const { SubMenu } = Menu
export const MenuCustom = ({ children }) => {
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
            <Layout style={{ minHeight: '100vh' }}>
                <Sider collapsible>
                    <div className="logo" />
                    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" onClick={handleClick} selectedKeys={[current]}>
                        {roleBasedRoutes[session.role].routes.map((route) => {
                            return (
                                <Menu.Item key={route.path} icon={route.icon}>
                                    {route.name}
                                </Menu.Item>
                            )
                        })}
                        <Menu.Item key={'/login'}>Logout</Menu.Item>
                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    <Content style={{ margin: '0 16px' }}>
                        <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                            {children}
                        </div>
                    </Content>
                </Layout>
            </Layout>
        </MenuStyle>
    )
}
