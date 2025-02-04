import { BASE_URL } from "@/constants";
import axios from "axios";

export async function getUsers() {
  try {
    const response = await axios.get(`${BASE_URL}/users`);
    return response.data;
  } catch (error) {
    console.log(error, "error");
  }
}

export async function getPostById(slug) {
  try {
    const response = await axios.get(`${BASE_URL}/posts?userId=${slug}`);
    return response.data;
  } catch (error) {
    console.log(error, "error");
  }
}
