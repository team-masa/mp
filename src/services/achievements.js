import { apiClient } from "./config"

export const apiGetAchievements = async () => {
    return apiClient.get("/achievements");
}