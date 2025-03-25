import React from 'react'; // ✅ Added correct import
import { Container, Row, Col, Button } from 'react-bootstrap'; // ✅ Added missing imports

const BlogPost = ({ post }) => {
  return (
    <Container className="mb-5 border-bottom pb-4">
      <Row>
        <Col md={4}>
          <img src={post.image} alt={post.title} className="img-fluid rounded"/>
        </Col>
        <Col md={8}>
          <h3>{post.title}</h3>
          <p>{post.description}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default BlogPost; // ✅ Fixed incorrect export placement
