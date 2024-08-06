//src/services/experience.js
import { apiClient } from "./config";

export const apiAddExperience = async (payload) => {
  return apiClient.post("/experience", payload);
};

export const apiGetExperiences = async () => {
  return apiClient.get("/experience");
};

export const apiGetExperienceById = async (id) => {
  return apiClient.get(`/experience/${id}`);
};

export const apiUpdateExperience = async (id, payload) => {
  return apiClient.patch(`/experience/${id}`, payload);
};

export const apiDeleteExperience = async (id) => {
  return apiClient.delete(`/experience/${id}`);
};