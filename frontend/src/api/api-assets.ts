import axios, { AxiosInstance } from "axios";
import {Asset, AssetToAdd} from "../models/assets";
import { getAuthToken } from "../util/auth";



// export type MutationVariables = {
//   asset: AssetToAdd,
//   accessToken: string,
// };

const assetApi = axios.create({
  baseURL: "http://localhost:4000/api/assets"
})
export const fetchAssets = async (city:string|null,guests:number|null): Promise<Asset[]> => {
  console.log(city);
  
  const response =  await assetApi.get('/', {
    params: {
      city: city,
      guests: guests
    },
    headers: {
      'Content-Type': 'application/json'
    }
  })
  return response.data;
}; 
export const fetchAssetByOwenrId = async (ownerId:string,axiosPrivate: AxiosInstance): Promise<Asset[]> => {
  // const accessToken = getAuthToken();
  // console.log(accessToken);
  
  const response = await axiosPrivate.get("assets/myassets/"+ownerId )
  // {
  //   headers: {
  //     Authorization: `Bearer ${accessToken}`
  //   }
  // }
  return response.data;
};
export const fetchAssetById = async (id:string): Promise<Asset> => {
  const response = await assetApi.get("/"+id)
  console.log(response.data);
  return response.data;
};
export const addAsset = async ( asset:AssetToAdd, accessToken:string ): Promise<AssetToAdd>  => {
  return (await assetApi.post("/", asset,{
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  })).data; 
}
export const editAsset = async (asset:Asset,accessToken:string) => {
  return (await assetApi.patch(`/${asset._id}`,asset,{
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  })).data;
}
export const deleteAsset = async ( id:string,accessToken:string ) => {
  return await assetApi.delete(`/${id}`,{
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  })
}