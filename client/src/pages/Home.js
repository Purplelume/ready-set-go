import React from 'react';
import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';
import { GET_PROJECTS } from '../utils/queries';
import { Card, Container, Row, Col } from 'react-bootstrap';

function Home() {
  const { loading, error, data } = useQuery(GET_PROJECTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const projects = data.projects;

  return (
    <Container>
      <Row>
        {projects.map((project) => (
          <Col key={project._id} sm={12} md={6} lg={4} className="mb-4">
            <Card>
              {/* <Card.Img variant="top" src={project.images[0] } /> */}
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
                <Card.Text>
                  Goal: ${project.goal.toFixed(2)}
                  <br />
                  Funding Progress: ${(project.fundingProgress).toFixed(2)}
                  <br />
                  Start Date: {new Date(project.startDateTime).toLocaleDateString()}
                  <br />
                  End Date: {new Date(project.endDateTime).toLocaleDateString()}
                </Card.Text>
              </Card.Body>
              <Card.Footer className="bg-white border-top-0">
                <div className="d-flex justify-content-between align-items-center">
                  <Link to={`/project/${project._id}`} className="btn btn-primary">
                    View Project
                  </Link>
                </div>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Home;
