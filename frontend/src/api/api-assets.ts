import axios from "axios";
import Asset from "../models/assets";






export const fetchAssets = async (): Promise<Asset[]> => {
  const response = await axios.get(
    "https://course-api.com/react-store-products"
  );
  return response.data;
}; 

export const fetchAssetById = async (id:string): Promise<Asset> => {
  const response = await axios.get(
    "https://course-api.com/react-store-single-product?id="+id
  );
  return response.data;
};

