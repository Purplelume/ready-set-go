const { User, Project } = require('../models');
const jwt = require('jsonwebtoken');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    project: async (parent, { id }) => {
      try {
        const project = await Project.findById(id);
        return project;
      } catch (error) {
        throw new Error('Error fetching project');
      }
    },
    projects: async () => {
      try {
        const projects = await Project.find();
        return projects;
      } catch (error) {
        throw new Error('Error fetching projects');
      }
    },
    user: async (parent, { id }, context) => {
      if (!context.user) {
        throw new AuthenticationError('You must be logged in to access this data.');
      }

      try {
        const user = await User.findById(id);
        return user;
      } catch (error) {
        throw new Error('Error fetching user');
      }
    },
    users: async () => {
      try {
        const users = await User.find();
        return users;
      } catch (error) {
        throw new Error('Error fetching users');
      }
    },
    // Add a resolver for the "me" field to get the authenticated user
    me: async (parent, args, context) => {
      if (!context.user) {
        throw new AuthenticationError('You must be logged in to access this data.');
      }

      try {
        const user = await User.findById(context.user._id);
        return user;
      } catch (error) {
        throw new Error('Error fetching authenticated user');
      }
    },
  },
  Mutation: {
    login: async (parent, { email, password }) => {
      // Your authentication logic here (e.g., check email and password validity)
      // If the user is authenticated, you can create and return the JWT token
      const user = await User.findOne({ email });

      if (!user || !(await user.isCorrectPassword(password))) {
        throw new AuthenticationError('Invalid email or password');
      }

      const token = signToken(user); // Sign the JWT token
      return { token, user };
    },
    createProject: async (parent, { input }) => {
      try {
        const project = await Project.create(input);
        return project;
      } catch (error) {
        throw new Error('Error creating project');
      }
    },
    updateProject: async (parent, { id, input }) => {
      try {
        const project = await Project.findByIdAndUpdate(id, input, { new: true });
        return project;
      } catch (error) {
        throw new Error('Error updating project');
      }
    },
    deleteProject: async (parent, { id }) => {
      try {
        const project = await Project.findByIdAndRemove(id);
        return project;
      } catch (error) {
        throw new Error('Error deleting project');
      }
    },
    createUser: async (parent, { input }) => {
      try {
        const user = await User.create(input);
        return user;
      } catch (error) {
        console.error('Error creating user:', error.message);
        throw new Error('Error creating user');
      }
    },
    updateUser: async (parent, { id, input }) => {
      try {
        const user = await User.findByIdAndUpdate(id, input, { new: true });
        return user;
      } catch (error) {
        throw new Error('Error updating user');
      }
    },
    deleteUser: async (parent, { id }) => {
      try {
        const user = await User.findByIdAndRemove(id);
        return user;
      } catch (error) {
        throw new Error('Error deleting user');
      }
    },
  },
  Project: {
    createdBy: async (parent) => {
      try {
        const user = await User.findById(parent.createdBy);
        return user;
      } catch (error) {
        throw new Error('Error fetching createdBy user');
      }
    },
  },
  User: {
    projects: async (parent) => {
      try {
        const projects = await Project.find({ createdBy: parent._id });
        return projects;
      } catch (error) {
        throw new Error('Error fetching user projects');
      }
    },
  },
};

module.exports = resolvers;
