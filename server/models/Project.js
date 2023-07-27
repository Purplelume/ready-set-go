const mongoose = require('mongoose');
const { Schema } = mongoose;

const projectSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  goal: {
    type: Number,
    required: true,
  },
  startDateTime: {
    type: Date,
  },
  endDateTime: {
    type: Date,
  },
  images: [String],
  fundingProgress: {
    type: Number,
    default: 0,
  },
  rewards: [
    {
      description: String,
      estimatedDeliveryDate: Date,
    },
  ],
  updates: [
    {
      title: String,
      content: String,
      createdAt: {
        type: Date,
        default: Date.now,
      },
    },
  ],
  socialMediaLinks: {
    email: String,
    facebook: String,
    instagram: String,
    linkedin: String,
  },
  comments: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
      },
      comment: String,
      createdAt: {
        type: Date,
        default: Date.now,
      },
    },
  ],
  stretchGoals: [
    {
      goalAmount: Number,
      description: String,
    },
  ],
  createdBy: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  backers: {
    type: Number,
    default: 0,
  },
});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;