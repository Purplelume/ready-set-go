import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import { GET_USER } from '../utils/queries';
import { DELETE_PROJECT } from "../utils/mutations";
import { Container, Row, Col, Button } from 'react-bootstrap';
import Auth from "../utils/auth";

const User = () => {
  const { id } = useParams();

  // If there is no `id` in the URL as a parameter, execute the `GET_USER` query for the logged-in user's information
  const { loading, error, data, refetch } = useQuery(GET_USER, {
    variables: { id: id || Auth.getProfile().data._id }, // If `id` is not provided, use the logged-in user's ID
    skip: !id && !Auth.loggedIn(), // Skip the query if `id` is not available and the user is not logged in
  });

  // Mutation to delete a project
  const [deleteProject] = useMutation(DELETE_PROJECT);

  // Handle delete project
  const handleDeleteProject = async (projectId) => {
    try {
      const { data } = await deleteProject({ variables: { id: projectId } });
      console.log(data);
      // Refetch the data to update the projects list after deletion
      refetch();
    } catch (error) {
      console.error('Error deleting project:', error);
    }
  };

  // Check for loading and error states
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error occurred: {error.message}</div>;
  }

  // Check if data is returning from the `GET_USER` query
  const user = data?.user || {};

  if (!user.userName) {
    return (
      <h4>
        You need to be logged in to see your profile page. Use the navigation
        links above to sign up or log in!
      </h4>
    );
  }

  return (
    <Container className="py-5">
      <h2 className="card-header">
        {id ? `${user.userName}'s` : 'Your'} projects:
      </h2>
      {user.projects?.length > 0 ? (
        <>
          {user.projects.map((project) => (
            <Container key={project._id} className="py-3 mb-3 border border-primary rounded">
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
                    <strong>Start Date:</strong>{' '}
                    {new Date(project.startDateTime).toLocaleDateString()}
                  </p>
                  <p>
                    <strong>End Date:</strong>{' '}
                    {new Date(project.endDateTime).toLocaleDateString()}
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
                  {/* You can customize how to display images, rewards, updates, social media links, comments, and stretch goals */}
                  {/* For example: */}
                  <h4>Images:</h4>
                  <ul className="list-unstyled">
                    {project.images.map((image, index) => (
                      <li key={index}>
                        <img
                          src={image}
                          alt={`Image ${index + 1}`}
                          className="img-fluid rounded shadow mb-2"
                        />
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
                            <strong>Estimated Delivery Date:</strong>{' '}
                            {new Date(reward.estimatedDeliveryDate).toLocaleDateString()}
                          </p>
                        )}
                      </li>
                    ))}
                  </ul>
                  {/* Display other project details here */}
                  <Button variant="danger" onClick={() => handleDeleteProject(project._id)}>Delete Project</Button>
                </Col>
              </Row>
            </Container>
          ))}
        </>
      ) : (
        <h1>No projects found.</h1>
      )}
    </Container>
  );
};

export default User;
