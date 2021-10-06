import React, { useState } from "react";
import { MenuStyle } from "./style";
import "antd/dist/antd.css";
import { Menu } from "antd";
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
  BellFilled,
} from "@ant-design/icons";
import logo from "../../../public/logo.png"
import { AreaChartOutlined } from "@ant-design/icons";

const { SubMenu } = Menu;

export const MenuCustom = () => {
  const [current, setCurrent] = useState("mail");

  const handleClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  return (
    <MenuStyle className="menu">
      <h1 className="title"><img className="img"src={logo} /></h1>
      <section className="menu-toggle">
        <article className="menu-wrapper">
          <Menu
            onClick={handleClick}
            selectedKeys={[current]}
            mode="horizontal"
          >
            <Menu.Item key="mail" icon={<AreaChartOutlined />}>
              Dashboard
            </Menu.Item>
            {/* <Menu.Item key="app" icon={<AppstoreOutlined />}>
              About Us
            </Menu.Item>
            <SubMenu
              key="SubMenu"
              icon={<SettingOutlined />}
              title="Services"
            >
              <Menu.ItemGroup title="Item 1">
                <Menu.Item key="setting:1">Option 1</Menu.Item>
                <Menu.Item key="setting:2">Option 2</Menu.Item>
              </Menu.ItemGroup>
              <Menu.ItemGroup title="Item 2">
                <Menu.Item key="setting:3">Option 3</Menu.Item>
                <Menu.Item key="setting:4">Option 4</Menu.Item>
              </Menu.ItemGroup>
            </SubMenu>
            <Menu.Item key="alipay"> */}
              {/* <a
                href="https://ant.design"
                target="_blank"
                rel="noopener noreferrer"
              >
                Contact
              </a> */}
            {/* </Menu.Item> */}
          </Menu>
        </article>

      </section>
    </MenuStyle>
  );
};
