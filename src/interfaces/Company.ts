// Company Collection

import { Types } from "mongoose";

//     name: String, required
//     location: String
//     website: String
//     industry: String (e.g., IT, Healthcare)
//     size: String (e.g., "51-200 employees", "Small", "Large")
//     logo: String (URL to company logo)
//     about: String (optional, a description about the company)
//     jobsPosted: Array of ObjectIds referencing the Job collection (optional, if you want to list all jobs for a company)

export default interface Company {
  name: string,
  location: string,
  website: string,
  industry: string,
  size: "Small" | "Middle" | "Big" | "Large",
  logo?: string,
  about?: string,
  jobsPosted: Types.ObjectId[] 
}