import { Link } from 'gatsby'
import React from 'react'
import { Card } from 'react-bootstrap'
import SampleImage from '../images/image_002.jpg'

const BlogItem = () => {
  return (
    <Card className="mt-4">
      <Card.Img variant="top" src={SampleImage}/>
      <Card.Body>
        <Card.Title>ブログタイトル</Card.Title>
        <Card.Text>
          2020/07/15
        </Card.Text>
        <Link to=''>see more</Link>
      </Card.Body>
    </Card>
  )
}

export default BlogItem