import axios from "axios";
import Asset from "../models/assets";





const assetApi = axios.create({
  baseURL: "http://localhost:4000/api/assets"
})
export const fetchAssets = async (): Promise<Asset[]> => {
  const response =  await assetApi.get("/")
  console.log(response.data);
  return response.data;
}; 

export const fetchAssetById = async (id:string): Promise<Asset> => {
  const response = await assetApi.get("/"+id)
  console.log(response.data);
  return response.data;
};
export const addAsset = async (asset:Asset) => {
  return (await assetApi.post("/", asset)).data;
}

export const deleteAsset = async ( id:string ) => {
  return await assetApi.delete(`/${id}`)
}