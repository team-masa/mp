import { apiClient } from "./config";

export const apiAddAchievement = async (payload) => {
  return apiClient.post("/achievement", payload); 
};

export const apiGetAchievements = async () => {
  return apiClient.get("/achievement"); 
};

export const apiGetAchievementById = async (id) => {
  return apiClient.get(`/achievement/${id}`);
};

export const apiUpdateAchievement = async (id, payload) => {
  return apiClient.patch(`/achievement/${id}`, payload);
};

export const apiDeleteAchievement = async (id) => {
  return apiClient.delete(`/achievement/${id}`);
};
