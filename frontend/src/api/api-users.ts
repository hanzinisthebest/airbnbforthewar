import { loginUser, userToAdd } from "@/models/user";
import axios from "axios";
const BASE_URL = 'http://localhost:4000/api/users';
const ALL_BASE_URL = 'http://localhost:4000/api';
export const userApi = axios.create({
    baseURL: BASE_URL
  })
  export const axiosPrivate = axios.create({
    baseURL: ALL_BASE_URL,
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true
});
//   export const fetchAssets = async (): Promise<Asset[]> => {
//     const response =  await assetApi.get(`/`)
//     console.log(response.data);
//     return response.data;
//   }; 
//   export const fetchAssetByOwenrId = async (ownerId:string): Promise<Asset[]> => {
//     const response = await assetApi.get("/myassets/"+ownerId)
//     console.log(response.data);
//     return response.data;
//   };
//   export const fetchAssetById = async (id:string): Promise<Asset> => {
//     const response = await assetApi.get("/"+id)
//     console.log(response.data);
//     return response.data;
//   };
  export const addUser = async (user:userToAdd) => {
    return (await userApi.post("/", user)).data; 
  }
  export const logUser = async (user:loginUser) => {
    return (await userApi.post("/auth", user)).data; 
  }

  export const getUsers = async (accessToken:string) => {
    
    return (await userApi.get("/users", {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
  })).data; 
  }

//   export const editAsset = async (asset:Asset) => {
//     return (await assetApi.patch(`/${asset._id}`,asset)).data;
//   }
//   export const deleteAsset = async ( id:string ) => {
//     return await assetApi.delete(`/${id}`)
//   }