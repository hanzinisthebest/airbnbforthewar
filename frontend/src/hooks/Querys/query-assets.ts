import { fetchAssets, fetchAssetById,fetchAssetByOwenrId } from "../../api/api-assets";
import {Asset} from "../../models/assets";
import {
  UseQueryOptions,
  useQuery,
} from "@tanstack/react-query";

export const useGetAssets = (options?: UseQueryOptions<Asset[], Error>) =>
  useQuery({
    queryKey: ["assets"],
    queryFn: fetchAssets,
    ...options,
  });
  
  export const useGetAssetsByOwnerId =  (ownerId:string,options?: UseQueryOptions<Asset[], Error>) =>
  useQuery({
   queryKey: ["assets",ownerId],
   queryFn: ()=>fetchAssetByOwenrId(ownerId),
   ...options,
 });
  export const useGetAssetsById =  (id:string,options?: UseQueryOptions<Asset, Error>) =>
   useQuery({
    queryKey: ["assets",id],
    queryFn: ()=>fetchAssetById(id),
    ...options,
  });