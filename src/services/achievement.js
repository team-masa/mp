import { apiClient } from "./config";

export const apiAddAchievement = async (payload) => {
  return apiClient.post("/achievements", payload); 
};

export const apiGetAchievements = async () => {
  return apiClient.get("/achievements"); 
};

export const apiGetAchievementById = async (id) => {
  return apiClient.get(`/achievements/${id}`);
};

export const apiUpdateAchievement = async (id, payload) => {
  return apiClient.patch(`/achievements/${id}`, payload);
};

export const apiDeleteAchievement = async (id) => {
  return apiClient.delete(`/achievements/${id}`);
};
