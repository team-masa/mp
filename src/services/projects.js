import { apiClient } from "./config"

export const apiGetProjects = async () => {
    return apiClient.get("/projects");
}