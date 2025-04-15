import apiClient from "./client";

const endpoint = "/listings";

export const getListings = () => apiClient.get(endpoint);
