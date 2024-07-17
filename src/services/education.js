import { apiClient } from "./config"


export const apiGetEducation = async () => {
    return apiClient.get("/education")
}