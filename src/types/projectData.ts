import { ReactElement } from 'react'

export interface getProjectDetailReturnTypes {
  name: string | undefined
  image: string | undefined
  description: ReactElement | undefined
}
export interface Project {
  projectShortDetail: string
  subText: string
  projectName: string
  projectUrl: string
}

export type Projects = Project[]
