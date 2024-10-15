import { Language } from "./Language";

export interface User {

  firstName: string,
  lastName: string,
  email: string,
  phone?: string,
  password: string,
  gitHubLink?: string,
  languages: Language[],
  cv: string,
  role: 'Applicant' | 'Employer' | 'Admin',
  profilePicture?: string,
  bio?: string,
  skills?: string[]

}