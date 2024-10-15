import mongoose from 'mongoose';
import Company from '../interfaces/Company';

const companySchema = new mongoose.Schema<Company>({
  name: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  website: {
    type: String,
    required: false,
  },
  industry: {
    type: String,
    required: true,
  },
  size: {
    type: String,
    required: true,
    enum: ["Small", "Middle", "Big", "Large"],
  },
  logo: {
    type: String,
    required: false,
  },
  about: {
    type: String,
    required: false,
  },
  jobsPosted: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Job', 
      required: true,
    }
  ],
});

const companyModel = mongoose.model<Company>("Company", companySchema);

export default companyModel;