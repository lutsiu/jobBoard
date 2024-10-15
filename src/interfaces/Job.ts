import { Types } from "mongoose";

export default interface Job {
  title: string,
  companyName: string,
  salary?: number,
  jobType: 'Full-time' |'Part-time' | 'Contract',
  location: string,
  description: string,
  requirements: string[],
  qualifications: string[],
  postedBy: Types.ObjectId,
  datePosted: Date,
  expiryDate?: Date,
  category?: string,
  status?: 'Active' | 'Closed' | 'Expired'
}