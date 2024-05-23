import  instance  from "@/app/components/common/configs/axios-config";
import { IUser } from "../model/user";

export const findAllUsersAPI = async (page: number) => {
  try {
    const response = await instance().get("/users/list", {
      params: { page, limit: 10 },
    });
    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const findUserByIdAPI = async (id: number) => {
  try {
    const response = await instance().get(`/users/detail`, { params: { id } });
    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const loginAPI = async (user:IUser) => {
  console.log(`로그인 API에 넘어온 파라미터: ${JSON.stringify(user)}`)
  try {
    const response = await instance().post(`/auth/login`, user);
    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};


export const existsUsernameAPI = async (username: string) => {
  try{
      const response = await instance().get(`/auth/existsUsername`,{params: {username}})
      console.log('existsUsernameAPI 결과: '+ response.data)
      return response.data
  }catch(error){
      console.log(error)
      return error
  }
}

export const logoutAPI = async () => {
  try {
    const response = await instance().get(`/users/logout`);
    console.log("logoutAPI 결과: " + response.data)
    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};