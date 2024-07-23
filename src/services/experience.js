import { apiClient } from "./config";

export const apiAddExperience = async (payload) => {
  return apiClient.post("/experiences", payload);
};

export const apiGetExperiences = async () => {
  return apiClient.get("/experiences");
};

export const apiGetExperienceById = async (id) => {
  return apiClient.get(`/experiences/${id}`);
};

export const apiUpdateExperience = async (id, payload) => {
  return apiClient.patch(`/experiences/${id}`, payload);
};

export const apiDeleteExperience = async (id) => {
  return apiClient.delete(`/experiences/${id}`);
};