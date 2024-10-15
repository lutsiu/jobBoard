import mongoose from 'mongoose';
import Application, {ApplicationComment} from '../interfaces/Application';

// Comment schema for the `comments` field in Application
const commentSchema = new mongoose.Schema<ApplicationComment>({
  date: {
    type: Date,
    required: true
  },
  text: {
    type: String,
    required: true
  }
});

const applicationSchema = new mongoose.Schema<Application>({
  jobId: {
    required: true,
    type: mongoose.Schema.Types.ObjectId,
    ref: "Job"
  },
  userId: {
    required: true,
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  coverLetter: {
    required: false,
    type: String
  },
  status: {
    type: String,
    required: true,
    enum: ['Pending','Reviewed','Interview','Hired','Rejected'],
    default: "Pending"
  },
  applicationDate: {
    required: true,
    default: () => Date.now(),
  },
  resume: {
    type: String,
    required: false
  },
  comments: {
    required: false,
    type: [commentSchema],

  }
});

const jobModel = mongoose.model<Application>("Application", applicationSchema);

export default jobModel;