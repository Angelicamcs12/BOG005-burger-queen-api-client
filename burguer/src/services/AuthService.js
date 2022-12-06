import axios from "axios";
import { API } from "../apirest";

export const auth = (user) => {
  return axios.post(API + "/login", user);
};
