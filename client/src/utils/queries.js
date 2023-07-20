import { gql } from '@apollo/client';

export const GET_PROJECT = gql`
  query getProject($id: ID!) {
    project(id: $id) {
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

export const GET_PROJECTS = gql`
  query getProjects {
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
`;

export const GET_USER = gql`
  query getUser($id: ID!) {
    user(id: $id) {
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

export const GET_USERS = gql`
  query getUsers {
    users {
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

export const GET_CURRENT_USER = gql`
  query getCurrentUser {
    me {
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