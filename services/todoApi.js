import axios from "axios";

const BASE_URL = "https://jsonplaceholder.typicode.com/todos";

export const fetchTodos = async (page, limit) => {
  const { data } = await axios.get(
    `${BASE_URL}?_page=${page}&_limit=${limit}`
  );
  return data;
};