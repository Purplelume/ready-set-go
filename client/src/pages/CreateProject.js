import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { GET_PROJECTS } from '../utils/queries';
import { CREATE_PROJECT } from "../utils/mutations";
import AuthService from '../utils/auth';

const CreateProject = () => {
  const [projectData, setProjectData] = useState({
    title: '',
    description: '',
    category: '',
    goal: 0,
    startDateTime: '', 
    endDateTime: '',
    images: [],
    fundingProgress: 0,
    rewards: [],
    updates: [],
    socialMediaLinks: {},
    comments: [],
    stretchGoals: [],
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProjectData({ ...projectData, [name]: value });
  };
  console.log(projectData);

  const [createProject, { error }] = useMutation(CREATE_PROJECT, {
    update(cache, { data: { createProject } }) {
      const { projects } = cache.readQuery({ query: GET_PROJECTS });
      cache.writeQuery({
        query: GET_PROJECTS,
        data: { projects: projects.concat([createProject]) },
      });
      console.log(createProject);
    },
    onError: (error) => {
      console.error('Error creating project:', error);
    },
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const user = AuthService.getProfile();
      console.log(user);

      if (!user) {
        console.error('User not logged in.');
        return;
      }

      const {
        title,
        description,
        category,
        goal,
        startDateTime,
        endDateTime,
        images,
        fundingProgress,
        rewards,
        updates,
        socialMediaLinks,
        comments,
        stretchGoals,
      } = projectData;

      await createProject({
        variables: {
          input: {
            title,
            description,
            category,
            goal: parseFloat(goal),
            startDateTime, 
            endDateTime, 
            images,
            fundingProgress: parseFloat(fundingProgress),
            rewards,
            updates,
            socialMediaLinks,
            comments,
            stretchGoals,
            createdBy: user._id,
          },
        },
      });

      // Redirect to the projects page after successful creation
      window.location.replace('/');
    } catch (error) {
      console.error('Error creating project:', error);
    }
  };

    return (
      <div className="container mt-5">
        <h2>Create a New Project</h2>
        <form onSubmit={handleFormSubmit}>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Project Title
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              value={projectData.title}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Project Description
            </label>
            <textarea
              className="form-control"
              id="description"
              name="description"
              value={projectData.description}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="category" className="form-label">
              Category
            </label>
            <select
              className="form-control"
              id="category"
              name="category"
              value={projectData.category}
              onChange={handleChange}
              required
            >
              <option value="">Select Category</option>
              <option value="category1">Tech</option>
              <option value="category2">Art</option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="goal" className="form-label">
              Funding Goal ($)
            </label>
            <input
              type="number"
              className="form-control"
              id="goal"
              name="goal"
              value={projectData.goal}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Create Project
          </button>
        </form>
      </div>
    );
    
};

export default CreateProject;
