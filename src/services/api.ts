import axios from "axios"

const instance = axios.create({
  baseURL: "https://api.github.com",
});

export const getUser = async (query: string) => {
  try {
    const response = await instance.get(`/users/${query}`);

    return response.data;
  } catch (error: any) {
    return error.response.data.message;
  }
};