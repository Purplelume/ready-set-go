import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        userName
        email
      }
    }
  }
`;

export const DONATE_TO_PROJECT = gql`
  mutation donateToProject($projectId: ID!, $amount: Float!) {
    donateToProject(projectId: $projectId, amount: $amount) {
      clientSecret
    }
  }
`;

export const HANDLE_DONATION_SUCCESS = gql`
  mutation handleDonationSuccess($paymentIntentId: ID!) {
    handleDonationSuccess(paymentIntentId: $paymentIntentId) {
      _id
      title
      description
      category
      goal
      startDateTime
      endDateTime
      images
      fundingProgress
      rewards {
        description
        estimatedDeliveryDate
      }
      updates {
        title
        content
        createdAt
      }
      socialMediaLinks {
        email
        facebook
        instagram
        linkedin
      }
      comments {
        user {
          _id
          userName
          email
        }
        comment
        createdAt
      }
      stretchGoals {
        goalAmount
        description
      }
      createdBy {
        _id
        userName
        email
      }
      backers
    }
  }
`;

export const CREATE_PROJECT = gql`
  mutation Mutation($input: CreateProjectInput!) {
    createProject(input: $input) {
      _id
      title
      description
      category
      goal
      startDateTime
      endDateTime
      images
      fundingProgress
      rewards {
        description
        estimatedDeliveryDate
      }
      updates {
        title
        content
        createdAt
      }
      socialMediaLinks {
        email
        facebook
        instagram
        linkedin
      }
      comments {
        comment
        createdAt
        
      }
      stretchGoals {
        goalAmount
        description
      }
      createdBy {
        _id
        userName
        email
      }
      backers
    }
  }
`;

export const UPDATE_PROJECT = gql`
  mutation updateProject($id: ID!, $input: UpdateProjectInput!) {
    updateProject(id: $id, input: $input) {
      _id
      title
      description
      category
      goal
      startDateTime
      endDateTime
      images
      fundingProgress
      rewards {
        description
        estimatedDeliveryDate
      }
      updates {
        title
        content
        createdAt
      }
      socialMediaLinks {
        email
        facebook
        instagram
        linkedin
      }
      comments {
        user {
          _id
          userName
          email
        }
        comment
        createdAt
      }
      stretchGoals {
        goalAmount
        description
      }
      createdBy {
        _id
        userName
        email
      }
      backers
    }
  }
`;

export const DELETE_PROJECT = gql`
  mutation deleteProject($id: ID!) {
    deleteProject(id: $id) {
      _id
      title
      description
      category
      goal
      startDateTime
      endDateTime
      images
      fundingProgress
      rewards {
        description
        estimatedDeliveryDate
      }
      updates {
        title
        content
        createdAt
      }
      socialMediaLinks {
        email
        facebook
        instagram
        linkedin
      }
      comments {
        user {
          _id
          userName
          email
        }
        comment
        createdAt
      }
      stretchGoals {
        goalAmount
        description
      }
      createdBy {
        _id
        userName
        email
      }
      backers
    }
  }
`;

export const CREATE_USER = gql`
  mutation createUser($input: CreateUserInput!) {
    createUser(input: $input) {
      token
      user {
        _id
        userName
        email
      }
    }
  }
`;

export const UPDATE_USER = gql`
  mutation updateUser($id: ID!, $input: UpdateUserInput!) {
    updateUser(id: $id, input: $input) {
      _id
      userName
      email
      projects {
        _id
        title
        description
        category
        goal
        startDateTime
        endDateTime
        images
        fundingProgress
        rewards {
          description
          estimatedDeliveryDate
        }
        updates {
          title
          content
          createdAt
        }
        socialMediaLinks {
          email
          facebook
          instagram
          linkedin
        }
        comments {
          user {
            _id
            userName
            email
          }
          comment
          createdAt
        }
        stretchGoals {
          goalAmount
          description
        }
        createdBy {
          _id
          userName
          email
        }
        backers
      }
    }
  }
`;

export const DELETE_USER = gql`
  mutation deleteUser($id: ID!) {
    deleteUser(id: $id) {
      _id
      userName
      email
      projects {
        _id
        title
        description
        category
        goal
        startDateTime
        endDateTime
        images
        fundingProgress
        rewards {
          description
          estimatedDeliveryDate
        }
        updates {
          title
          content
          createdAt
        }
        socialMediaLinks {
          email
          facebook
          instagram
          linkedin
        }
        comments {
          user {
            _id
            userName
            email
          }
          comment
          createdAt
        }
        stretchGoals {
          goalAmount
          description
        }
        createdBy {
          _id
          userName
          email
        }
        backers
      }
    }
  }
`;