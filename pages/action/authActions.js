import {SET_CURRENT_USER} from './types';
import axios from "axios";

export const setUser = (user) => {

    axios
      .post("http://localhost:5000/users/login", user)
      .then(res => {
        console.log(res.data);
        const { token } = res.data;
        localStorage.setItem("jwtToken", "Bearer " + token);
        axios.defaults.headers.common["Authorization"] = "Bearer " + token;
      })
      .catch(err => console.log(err));

    return {
        type : SET_CURRENT_USER, 
        payload : user
    }
}