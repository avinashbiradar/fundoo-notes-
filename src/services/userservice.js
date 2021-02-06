// import AxiosService from "./axiosservice";
// const axiosService=new AxiosService();
// export default class UserService{
//     registration(data){
//         return axiosService.Post('user/register',data)
//     }
// }


import axios from "axios";

const baseUrl = "http://fundoonotes.incubation.bridgelabz.com/api";


export default function registration(data) {
        console.log("This is the registration part", data);
        let data1 = axios.post(`http://fundoonotes.incubation.bridgelabz.com/explorer/#!/user/register`, data);
        return data1;
    

};