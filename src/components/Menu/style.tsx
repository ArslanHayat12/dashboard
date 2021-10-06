import styled from 'styled-components'
export const MenuStyle = styled.section`
.img {
    height: 30px;
}
    .menu {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 20px 0;
        border-bottom: 1px solid #ccc;
       
        .title {
            color: #ff9800;
            font-weight: normal;
            font-size: 18px;
            margin: 0;

            @media (max-width: 320px) {
                font-size: 16px;
            }

            span {
                color: #ccc;
                margin-left: 50px;
            }
        }

        .avatar-image {
            width: 35px;
            height: 35px;
            border-radius: 50%;
        }

        .menu-wrapper {
            display: flex;
        }

        .menu-toggle {
            display: flex;
            align-items: center;
            justify-content: flex-end;

            .anticon-menu {
                display: none;

                @media (max-width: 500px) {
                    display: flex;
                    align-items: center;
                    position: absolute;
                    right: 100px;
                    top: 26px;
                }
            }

            .ant-menu-horizontal {
                border: none;
                margin-right: 20px;

                @media (max-width: 500px) {
                    margin: 0;
                }
            }

            .anticon-bell {
                display: flex;
                align-items: center;
                margin-right: 10px;
                margin-bottom: 7px;

                @media (max-width: 500px) {
                    margin-bottom: 0;
                }
            }

            .anticon-bell svg {
                width: 20px;
                height: 20px;
                fill: #ff9800;
            }

            .ant-menu-overflow {
                width: 430px;
                background-color: transparent;
                z-index: 1;

                @media (max-width: 500px) {
                    width: unset;
                }
            }

            @media (max-width: 500px) {
                .anticon-ellipsis {
                    visibility: hidden;
                }

                .ant-menu-submenu-selected::after {
                    border-bottom: none;
                }

                .ant-menu-overflow-item {
                    &:after {
                        border-bottom: none !important;
                    }
                }

                .ant-menu-submenu {
                    .ant-menu-submenu-title {
                        .anticon .anticon-ellipsis {
                            display: none;
                        }
                    }
                }
            }
        }
    }

    @media (max-width: 500px) {
        .ant-menu-submenu-popup {
            position: relative !important;
            top: 56px !important;
        }
    }
`
