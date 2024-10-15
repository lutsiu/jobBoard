import mongoose, {Schema} from 'mongoose';
import { User } from '../interfaces/User';
import { Language } from '../interfaces/Language';

const languageSchema = new Schema<Language>({
  language: {
    required: true,
    type: String
  },
  level: {
    type: String,
    required: true,
    enum: ["A1", "A2", "B1", "B2", "C1", "C2"]
  }
});


const userSchema = new Schema<User>({
  firstName: {
    required: true,
    type: String
  },
  lastName: {
    required: true,
    type: String
  },
  email: {
    required: true,
    type: String,
    unique: true,
    match: /^\S+@\S+\.\S+$/
  },
  phone: {
    required: false,
    type: String,
    unique: true
  },
  password: {
    required: true,
    type: String
  },
  gitHubLink: {
    required: false,
    type: String
  },
  languages: {
    required: true,
    type: [languageSchema],
    default: []
  },
  cv: {
    required: true,
    type: String
  },
  role: {
    required: true,
    type: String,
    enum: ["Applicant", "Employer", "Admin"],
    default: "Applicant"
  },
  profilePicture: {
    required: false,
    type: String
  },
  bio: {
    required: false,
    type: String
  },
  skills: {
    required: false,
    type: [String],
    default: []
  }
});

const userModel = mongoose.model<User>("User", userSchema);

export default userModel;