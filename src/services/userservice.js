
import axios from "axios";

const baseUrl = `http://fundoonotes.incubation.bridgelabz.com/api/user/userSignUp`;


export default function registration(data) {
        console.log("This is the registration part", data);
        let data1 = axios.post(baseUrl, data);
        return data1;
};

export function login(data) {
    console.log("This is the Sign in part", data);
    let data2 = axios.post(`http://fundoonotes.incubation.bridgelabz.com/api/user/login`, data);
    return data2;
}

export function forgotPass(data) {
        console.log("This is forgot password part", data);
        let data3 = axios.post(`http://fundoonotes.incubation.bridgelabz.com/api/user/reset`, data);
        return data3;
   
};

export function resetPass(data,id) {
        console.log("This is reset password part", data,id);
        let data3 = axios.post(`http://fundoonotes.incubation.bridgelabz.com/api/user/reset-password`,data,{headers:{'Authorization':id}});
        return data3;   
};