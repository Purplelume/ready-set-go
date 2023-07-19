const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Project {
    _id: ID!
    title: String!
    description: String!
    category: String!
    goal: Float!
    startDateTime: DateTime!
    endDateTime: DateTime!
    images: [String]
    fundingProgress: Float!
    rewards: [Reward]
    updates: [Update]
    socialMediaLinks: SocialMediaLinks
    comments: [Comment]
    stretchGoals: [StretchGoal]
    createdBy: User!
    backers: Int!
  }

  type Reward {
    description: String!
    estimatedDeliveryDate: DateTime
  }

  type Update {
    title: String!
    content: String!
    createdAt: DateTime!
  }

  type SocialMediaLinks {
    email: String
    facebook: String
    instagram: String
    linkedin: String
  }

  type Comment {
    user: User!
    comment: String!
    createdAt: DateTime!
  }

  type StretchGoal {
    goalAmount: Float!
    description: String!
  }

  type User {
    _id: ID!
    userName: String!
    email: String!
    projects: [Project]
  }

  type AuthPayload {
    token: ID
    user: User
  }

  scalar DateTime

  type Query {
    project(id: ID!): Project
    projects: [Project]
    user(id: ID!): User
    users: [User]
    me: User
  }

  type Mutation {
    login(email: String!, password: String!): AuthPayload
    createProject(input: CreateProjectInput!): Project
    updateProject(id: ID!, input: UpdateProjectInput!): Project
    deleteProject(id: ID!): Project
    createUser(input: CreateUserInput!): AuthPayload
    updateUser(id: ID!, input: UpdateUserInput!): User
    deleteUser(id: ID!): User
  }

  input RewardInput {
    description: String!
    estimatedDeliveryDate: DateTime
  }

  input UpdateProjectInput {
    title: String
    description: String
    category: String
    goal: Float
    startDateTime: DateTime
    endDateTime: DateTime
    images: [String]
    rewards: [RewardInput]
    socialMediaLinks: SocialMediaLinksInput
    createdBy: ID
  }

  input SocialMediaLinksInput {
    email: String
    facebook: String
    instagram: String
    linkedin: String
  }

  input CreateUserInput {
    userName: String!
    email: String!
    password: String!
  }

  input UpdateUserInput {
    userName: String
    email: String
    password: String
  }

  input CreateProjectInput {
    title: String!
    description: String!
    category: String!
    goal: Float!
    startDateTime: DateTime!
    endDateTime: DateTime!
    images: [String]
    rewards: [RewardInput]
    socialMediaLinks: SocialMediaLinksInput
    createdBy: ID!
  }
`;

module.exports = typeDefs;