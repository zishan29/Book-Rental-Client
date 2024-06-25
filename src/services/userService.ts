import axios from "axios";
const BASE_URL = "http://localhost:3000/api/users";
const token = window.localStorage.getItem("token");

const getAllUsers = async () => {
  console.log(token);
  const response = await axios.get(`${BASE_URL}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export default { getAllUsers };
