//src/services/volunteering.js
import { apiClient } from "./config";

export const apiAddVolunteering = async (payload) => {
  return apiClient.post("/volunteering", payload);
};

export const apiGetVolunteering = async () => {
  return apiClient.get("/volunteering");
};

export const apiGetVolunteeringById = async (id) => {
  return apiClient.get(`/volunteering/${id}`);
};

export const apiUpdateVolunteering = async (id, payload) => {
  return apiClient.patch(`/volunteering/${id}`, payload);
};

export const apiDeleteVolunteering = async (id) => {
  return apiClient.delete(`/volunteering/${id}`);
};
