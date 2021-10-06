import React from 'react'
import Layout from '../components/Layout/Layout'
import Card from '../components/Card/Card'
import { AntdCardStyleContainer } from './style'
import ResponsiveEmbed from "react-responsive-embed"

function Dashboard() {
    return (
        <>
            {/* <Layout type="sm">
                <Card type="sm">
                    {' '}
                    <AntdCardStyleContainer size="small" title="Chart Title" loading={true}>
                        <p>Card content</p>
                        <p>Card content</p>
                        <p>Card content</p>
                    </AntdCardStyleContainer>
                </Card>

                <Card type="sm">
                    {' '}
                    <AntdCardStyleContainer size="small" title="Chart Title" loading={true}>
                        <p>Card content</p>
                        <p>Card content</p>
                        <p>Card content</p>
                    </AntdCardStyleContainer>
                </Card>

                <Card type="sm">
                    {' '}
                    <AntdCardStyleContainer size="small" title="Chart Title" loading={true}>
                        <p>Card content</p>
                        <p>Card content</p>
                        <p>Card content</p>
                    </AntdCardStyleContainer>
                </Card>
                <Card type="sm">
                    {' '}
                    <AntdCardStyleContainer size="small" title="Chart Title" loading={true}>
                        <p>Card content</p>
                        <p>Card content</p>
                        <p>Card content</p>
                    </AntdCardStyleContainer>
                </Card>
            </Layout>
            <Layout type="md">
                <Card type="md">
                    <AntdCardStyleContainer size="small" title="Chart Title" loading={true}>
                        <p>Card content</p>
                        <p>Card content</p>
                        <p>Card content</p>
                    </AntdCardStyleContainer>
                </Card>
                <Card type="md">
                    {' '}
                    <AntdCardStyleContainer size="small" title="Chart Title" loading={true}>
                        <p>Card content</p>
                        <p>Card content</p>
                        <p>Card content</p>
                    </AntdCardStyleContainer>
                </Card>
                <Card type="md">
                    {' '}
                    <AntdCardStyleContainer size="small" title="Chart Title" loading={true}>
                        <p>Card content</p>
                        <p>Card content</p>
                        <p>Card content</p>
                    </AntdCardStyleContainer>
                </Card>
                <Card type="md">
                    {' '}
                    <AntdCardStyleContainer size="small" title="Chart Title" loading={true}>
                        <p>Card content</p>
                        <p>Card content</p>
                        <p>Card content</p>
                    </AntdCardStyleContainer>
                </Card>
            </Layout>*/}
            <Layout type="lg"> 
                {/* <Card type="lg">
                    {' '}
                    <AntdCardStyleContainer size="small" title="Chart Title" loading={true}>
                        <p>Card content</p>
                        <p>Card content</p>
                        <p>Card content</p>
                    </AntdCardStyleContainer>
                </Card> */}
                <Card type="lg">
                    {' '}
                     <AntdCardStyleContainer size="small" >
                        <div className="container"> 
                            <iframe
                                className="responsive-iframe"
                                src="https://45165593c88d40849d9cd81b0862bfe1.ap-southeast-2.aws.found.io:9243/app/dashboards#/view/f140ebc0-0330-11ec-a45c-9100ed6fa7a0?embed=true&_g=(filters%3A!())"
                            ></iframe>
                         </div>
                    </AntdCardStyleContainer> 
                   
                   
                </Card>
            </Layout>
        </>
    )
}

export default Dashboard
