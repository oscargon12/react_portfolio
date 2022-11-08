import { projects } from '../data/projects'

export const getProjects = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(projects)
        }, 3000)
    })
}