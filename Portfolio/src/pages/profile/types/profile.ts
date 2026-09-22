
type ExternalLink = {
  label: string
  username?: string
  url: string
  description: string
}

type Experience = {
  company: string
  role: string
  dates: string
  description: string
  skills: string[]
}

export type Profile = {
  name: string
  title: string
  location: string
  email: string
  picture: string
  about: string[]
  github: ExternalLink
  linkedin: ExternalLink
  skills: string[]
  experience: Experience[]
}