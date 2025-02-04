import { BASE_URL } from "@/constants";
import axios from "axios";

export async function getUsers() {
  const response = await axios.get(`${BASE_URL}/users`);
  return response.data;
}

export async function getPostById(slug) {
  const response = await axios.get(`${BASE_URL}/posts?userId=${slug}`);
  return response.data;
}
