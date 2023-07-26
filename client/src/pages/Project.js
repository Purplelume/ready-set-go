import React from 'react';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { GET_PROJECT } from '../utils/queries';
import { Container, Row, Col } from 'react-bootstrap';

function Project() {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_PROJECT, {
    variables: { id },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const project = data.project;

  return (
    <Container className="py-5">
      <Row>
        <Col md={8} className="mb-4">
          <h2 className="display-4 text-primary">{project.title}</h2>
          <p className="lead">{project.description}</p>
          <hr className="my-4" />
          <p>
            <strong>Category:</strong> {project.category}
          </p>
          <p>
            <strong>Goal:</strong> ${project.goal}
          </p>
          <p>
            <strong>Start Date:</strong> {new Date(project.startDateTime).toLocaleDateString()}
          </p>
          <p>
            <strong>End Date:</strong> {new Date(project.endDateTime).toLocaleDateString()}
          </p>
          <p>
            <strong>Funding Progress:</strong> {project.fundingProgress}%
          </p>
          <p>
            <strong>Backers:</strong> {project.backers}
          </p>
          <p>
            <strong>Created By:</strong> {project.createdBy.userName}
          </p>
        </Col>
        <Col md={4}>
          <h4>Images:</h4>
          <ul className="list-unstyled">
            {project.images.map((image, index) => (
              <li key={index}>
                <img src={image} alt={`Image ${index + 1}`} className="img-fluid rounded shadow mb-2" />
              </li>
            ))}
          </ul>
          <h4>Rewards:</h4>
          <ul className="list-unstyled">
            {project.rewards.map((reward, index) => (
              <li key={index}>
                <p>
                  <strong>Description:</strong> {reward.description}
                </p>
                {reward.estimatedDeliveryDate && (
                  <p>
                    <strong>Estimated Delivery Date:</strong> {new Date(reward.estimatedDeliveryDate).toLocaleDateString()}
                  </p>
                )}
              </li>
            ))}
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Project;
