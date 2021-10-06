import React from 'react'
import { CardStyle } from './style'
import { CardProps as AntdCardProps } from 'antd'
type CardProps = {type?:string,children:any}
function Card(props: CardProps) {
    return <CardStyle  className="card" type={props.type}>{props.children}</CardStyle>
}

export default Card
