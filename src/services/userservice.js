// import AxiosService from "./axiosservice";
// const axiosService=new AxiosService();
// export default class UserService{
//     registration(data){
//         return axiosService.Post('user/register',data)
//     }
// }


import axios from "axios";

const baseUrl = `http://fundoonotes.incubation.bridgelabz.com/api/user/userSignUp`;


export default function registration(data) {
        console.log("This is the registration part", data);
        let data1 = axios.post(baseUrl, data);
        return data1;
    

};

// export  function login(data) {
//     console.log("This is the Sign in part", data);
//     let data2 = axios.post(`http://fundoonotes.incubation.bridgelabz.com/api/user/login`, data);
//     return data2;
// }


