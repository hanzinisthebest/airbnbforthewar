import axios from "axios";
import Asset from "../models/assets";






export const fetchAssets = async (): Promise<Asset[]> => {
  const response = await axios.get(
    "http://localhost:4000/api/assets"
  );
  return response.data;
}; 

export const fetchAssetById = async (id:string): Promise<Asset> => {
  const response = await axios.get(
    "http://localhost:4000/api/assets/"+id
  );
  return response.data;
};

