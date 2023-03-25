import React from 'react'

import { Button, message, Layout } from 'antd'
import { Content, Footer, Header } from 'antd/es/layout/layout'
import Sider from 'antd/es/layout/Sider'

const About = () => {
  return (
    <div className="about">
      <Button type="primary" onClick={ () => message.info('about') }>Click</Button>
      {/* <Layout>
        <Header>header</Header>
        <Layout>
          <Sider>left sider</Sider>
          <Content>content</Content>
          <Sider>right sider</Sider>
        </Layout>
        <Footer>footer</Footer>
      </Layout> */}
    </div>
  )
}

export default About