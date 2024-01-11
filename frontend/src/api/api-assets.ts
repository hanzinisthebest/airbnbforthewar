import axios from "axios";
import {Asset, AssetToAdd} from "../models/assets";
import { getAuthToken } from "../util/auth";





const assetApi = axios.create({
  baseURL: "http://localhost:4000/api/assets"
})
export const fetchAssets = async (): Promise<Asset[]> => {
  const response =  await assetApi.get(`/`,)
  console.log(response.data);
  return response.data;
}; 
export const fetchAssetByOwenrId = async (ownerId:string): Promise<Asset[]> => {
  const accessToken = getAuthToken();
  // console.log(accessToken);
  
  const response = await assetApi.get("/myassets/"+ownerId, {
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  })
  console.log(response.data);
  return response.data;
};
export const fetchAssetById = async (id:string): Promise<Asset> => {
  const response = await assetApi.get("/"+id)
  console.log(response.data);
  return response.data;
};
export const addAsset = async (asset:AssetToAdd) => {
  const accessToken = getAuthToken();
  return (await assetApi.post("/", asset,{
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  })).data; 
}
export const editAsset = async (asset:Asset) => {
  const accessToken = getAuthToken();
  return (await assetApi.patch(`/${asset._id}`,asset,{
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  })).data;
}
export const deleteAsset = async ( id:string ) => {
  const accessToken = getAuthToken();
  return await assetApi.delete(`/${id}`,{
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  })
}