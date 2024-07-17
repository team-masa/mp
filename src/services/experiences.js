import { apiClient } from "./config"

export const apiGetExperiences = async () => {
    return apiClient.get("/experiences")
}