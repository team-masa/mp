//src/services/projects.js
import { apiClient } from "./config";

export const apiAddProject = async (payload) => {
  return apiClient.post("/projects", payload);
};

export const apiGetProjects = async () => {
  return apiClient.get("/projects");
};

export const apiGetProjectById = async (id) => {
  return apiClient.get(`/projects/${id}`);
};

export const apiUpdateProject = async (id, payload) => {
  return apiClient.patch(`/projects/${id}`, payload);
};

export const apiDeleteProject = async (id) => {
  return apiClient.delete(`/projects/${id}`);
};