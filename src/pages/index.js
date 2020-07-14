import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import BlogItem from "../components/BlogItem"
import Kv from "../components/kv"
// import { Link } from "gatsby"

import Layout from "../components/layout"


const IndexPage = () => (
  <Layout>
    <Kv />
    <Container>
      <Row>
        <Col sm={4}>
          <BlogItem />
        </Col>
        <Col sm={4}>
          <BlogItem />
        </Col>
        <Col sm={4}>
          <BlogItem />
        </Col>
      </Row>
    </Container>
  </Layout>
)

export default IndexPage
