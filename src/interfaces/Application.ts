  // jobId: ObjectId, reference to the Job collection, required
  // userId: ObjectId, reference to the User collection, required
  // coverLetter: String (optional, allowing applicants to add a personalized note)
  // status: String (e.g., Pending, Reviewed, Interview, Hired, Rejected), default: "Pending"
  // applicationDate: Date (default to the date the application is submitted)
  // resume: String (optional, URL or path to resume if different from main CV)
  // comments: Array of objects (optional, for feedback during the application process)

  import { Types } from "mongoose";

  export interface ApplicationComment {
    text: string,
    date: Date
  };

  export default interface Application {
    jobId: Types.ObjectId,
    userId: Types.ObjectId,
    coverLetter?: string,
    status: 'Pending' | 'Reviewed' | 'Interview' | 'Hired' | 'Rejected',
    applicationDate: Date,
    resume: string 
    comments?: Comment[] 
  }