import axios from "axios";
const BASE_URL = "http://localhost:3000/api/login";

const login = async (email: string, password: string) => {
  const response = await axios.post(`${BASE_URL}`, {
    email,
    password,
  });
  window.localStorage.setItem("token", response.data.token);
  return response.data;
};

export default { login };
