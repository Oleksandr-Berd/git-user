import axios from "axios"

const instance = axios.create({
  baseURL: "https://api.github.com",
});

export const getUser = async (userName: string = "brynary") => {
  try {
    const response = await instance.get(`/users/${userName}`);

    return response.data;
  } catch (error: any) {
    return error.response;
  }
};