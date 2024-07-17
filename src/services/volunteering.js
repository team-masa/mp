import { apiClient } from "./config"


export const apiGetVolunteering = async () => {
    return apiClient.get("/volunteering")
}