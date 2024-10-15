import mongoose from 'mongoose';
import Job from '../interfaces/Job';


const jobSchema = new mongoose.Schema<Job>({
  title: {
    type: String,
    required: true
  },
  companyName: {
    type: String,
    required: true
  },

  salary: {
    type: Number,
    required: false,
  },
  jobType: {
    required: true,
    type: String, 
    enum: ['Full-time','Part-time','Contract']
  },
  location: {
    required: true,
    type: String
  },
  description: {
    required: true,
    type: String
  },
  requirements: {
    type: [String],
    required: true   
  },
  qualifications: {
    type: [String],
    required: true   
  },
  postedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  datePosted: {
    type: Date,
    required: true
  },
  expiryDate: {
    type: Date,
    required: false
  },
  category: {
    required: false,
    type: String
  },
  status: {
    type: String,
    required: false,
    enum: ['Active', 'Closed', 'Expired']
  }
});

const jobModel = mongoose.model<Job>("Job", jobSchema);

export default jobModel;